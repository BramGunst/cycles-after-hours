const siteNav = document.querySelector(".site-nav");

if (siteNav) {
  const dropdowns = [...siteNav.querySelectorAll(".nav-dropdown")];
  const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  const scrollThreshold = 12;
  const topThreshold = 24;
  let previousScrollY = window.scrollY;
  let accumulatedScroll = 0;
  let activeDropdown = null;
  let dismissedDropdown = null;
  let keyboardNavigationActive = false;
  let keyboardFocusedDropdown = null;

  const setActiveDropdown = (dropdown) => {
    activeDropdown = dropdown;

    dropdowns.forEach((item) => {
      const isActive = item === activeDropdown;
      item.classList.toggle("is-open", isActive);
      item.querySelector("button").setAttribute("aria-expanded", String(isActive));
    });
  };

  const closeDropdown = () => setActiveDropdown(null);

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector("button");
    let lastPointerType = "";

    trigger.addEventListener("pointerdown", (event) => {
      lastPointerType = event.pointerType;
    });

    trigger.addEventListener("click", (event) => {
      const isTouchInteraction = event.detail === 0 || lastPointerType === "touch" || !hoverQuery.matches;
      lastPointerType = "";

      if (!isTouchInteraction) {
        return;
      }

      if (activeDropdown === dropdown) {
        closeDropdown();
      } else {
        dismissedDropdown = null;
        setActiveDropdown(dropdown);
      }
    });

    dropdown.addEventListener("pointerenter", (event) => {
      if (hoverQuery.matches && event.pointerType !== "touch") {
        dismissedDropdown = null;
        setActiveDropdown(dropdown);
      }
    });

    dropdown.addEventListener("pointerleave", (event) => {
      if (hoverQuery.matches && event.pointerType !== "touch" && keyboardFocusedDropdown !== dropdown) {
        if (activeDropdown === dropdown) {
          closeDropdown();
        }
        if (dismissedDropdown === dropdown) {
          dismissedDropdown = null;
        }
      }
    });

    dropdown.addEventListener("focusin", () => {
      if (keyboardNavigationActive && dismissedDropdown !== dropdown) {
        keyboardFocusedDropdown = dropdown;
        setActiveDropdown(dropdown);
      }
    });

    dropdown.addEventListener("focusout", (event) => {
      if (!dropdown.contains(event.relatedTarget)) {
        if (keyboardFocusedDropdown === dropdown) {
          keyboardFocusedDropdown = null;
        }
        if (activeDropdown === dropdown && !dropdown.matches(":hover")) {
          closeDropdown();
        }
        if (dismissedDropdown === dropdown) {
          dismissedDropdown = null;
        }
      }
    });
  });

  document.addEventListener("pointerdown", (event) => {
    keyboardNavigationActive = false;
    keyboardFocusedDropdown = null;
    if (!event.target.closest(".nav-dropdown")) {
      closeDropdown();
      dismissedDropdown = null;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" || event.key.startsWith("Arrow")) {
      keyboardNavigationActive = true;
      dismissedDropdown = null;
    }

    if (event.key !== "Escape") {
      return;
    }

    if (activeDropdown) {
      const dropdownToClose = activeDropdown;
      dismissedDropdown = dropdownToClose;
      keyboardFocusedDropdown = null;
      closeDropdown();
      dropdownToClose.querySelector("button").focus();
    }
  });

  siteNav.addEventListener("focusin", () => {
    siteNav.classList.remove("nav-hidden");
    accumulatedScroll = 0;
  });

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - previousScrollY;
    const interactionActive =
      siteNav.matches(":hover") ||
      (keyboardNavigationActive && siteNav.matches(":focus-within")) ||
      dropdowns.some((dropdown) => dropdown.classList.contains("is-open"));

    siteNav.classList.toggle("nav-scrolled", currentScrollY > topThreshold);

    if (currentScrollY <= topThreshold) {
      siteNav.classList.remove("nav-hidden");
      accumulatedScroll = 0;
    } else if (scrollDelta !== 0) {
      if (Math.sign(scrollDelta) !== Math.sign(accumulatedScroll)) {
        accumulatedScroll = scrollDelta;
      } else {
        accumulatedScroll += scrollDelta;
      }

      if (accumulatedScroll >= scrollThreshold) {
        if (!interactionActive) {
          siteNav.classList.add("nav-hidden");
        }
        accumulatedScroll = 0;
      } else if (accumulatedScroll <= -scrollThreshold) {
        siteNav.classList.remove("nav-hidden");
        accumulatedScroll = 0;
      }
    }

    previousScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

// Request playback for muted demos even when the browser defers HTML autoplay.
// Native loop owns repeated playback; no shared pause state is used.
document.querySelectorAll(".demo-video").forEach((video) => {
  video.muted = true;
  video.play().catch(() => {
    // Browser autoplay preferences may still prevent automatic playback.
  });
});

const motionBlurToggleImage = document.querySelector(".toggle-screenshot");

if (motionBlurToggleImage) {
  const imageSources = [
    "assets/images/ui_mb_toggle_off.png",
    "assets/images/ui_mb_toggle_on.png",
  ];
  const preloadedImages = imageSources.map((src) => {
    const image = new Image();
    image.src = src;
    return image.decode();
  });

  Promise.all(preloadedImages)
    .then(() => {
      let showingOnImage = false;

      window.setInterval(() => {
        showingOnImage = !showingOnImage;
        motionBlurToggleImage.src = imageSources[Number(showingOnImage)];
      }, 1000);
    })
    .catch((error) => {
      console.error("Could not preload the Viewport Motion Blur toggle screenshots.", error);
    });
}

// Decorative hero gizmo: no video state or continuous idle animation.
const hero = document.querySelector(".hero");
const axisGizmo = document.querySelector(".axis-gizmo");

if (hero && axisGizmo) {
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const maxOrbit = 55;
  const maxPitch = 10;
  const settlingThreshold = 0.01;
  let lastPointer = null;
  let targetPitch = 0;
  let targetOrbit = 0;
  let currentPitch = 0;
  let currentOrbit = 0;
  let frame = 0;
  let lastTime = 0;

  const radians = (degrees) => degrees * Math.PI / 180;
  const rotateX = ([x, y, z], angle) => {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    return [x, y * cosine - z * sine, y * sine + z * cosine];
  };
  const rotateZ = ([x, y, z], angle) => {
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    return [x * cosine - y * sine, x * sine + y * cosine, z];
  };
  const labels = [...axisGizmo.querySelectorAll("text")];
  const axes = [
    { name: "X", vector: [1, 0, 0], className: "axis-x" },
    { name: "Y", vector: [0, 1, 0], className: "axis-y" },
    { name: "Z", vector: [0, 0, 1], className: "axis-z" },
  ].map((axis) => ({
    ...axis,
    line: axisGizmo.querySelector(`path.${axis.className}`),
    endpoint: axisGizmo.querySelector(`circle.${axis.className}`),
    label: labels.find((label) => label.textContent.trim() === axis.name),
  }));
  const origin = { x: 44, y: 56 };
  const axisLength = 47;
  const defaultRoll = radians(40);
  const defaultPitch = radians(-123);
  // Let endpoint circles extend naturally beyond the viewBox at oblique angles.
  // The SVG's position, size and transform stay fixed.
  axisGizmo.setAttribute("overflow", "visible");
  const render = () => {
    const orbit = radians(currentOrbit);
    const pitch = radians(currentPitch);
    axes.forEach((axis) => {
      // Orbit around the world Z axis before applying the default camera view.
      const oriented = rotateX(rotateZ(axis.vector, defaultRoll + orbit), defaultPitch);
      const rotated = rotateX(oriented, pitch);
      // Orthographic projection, with camera Y pointing upward.
      const x = (origin.x + rotated[0] * axisLength).toFixed(3);
      const y = (origin.y - rotated[1] * axisLength).toFixed(3);
      axis.line.setAttribute("d", `M${origin.x} ${origin.y}L${x} ${y}`);
      axis.endpoint.setAttribute("cx", x);
      axis.endpoint.setAttribute("cy", y);
      axis.label.setAttribute("x", x);
      axis.label.setAttribute("y", (Number(y) + 4).toFixed(3));
    });
  };
  const animate = (time) => {
    const delta = lastTime ? Math.min(time - lastTime, 64) : 16;
    lastTime = time;
    const easing = 1 - Math.exp(-delta / 110);
    currentPitch += (targetPitch - currentPitch) * easing;
    currentOrbit += (targetOrbit - currentOrbit) * easing;
    const settled = Math.abs(targetPitch - currentPitch) < settlingThreshold &&
      Math.abs(targetOrbit - currentOrbit) < settlingThreshold;
    if (settled) {
      currentPitch = targetPitch;
      currentOrbit = targetOrbit;
    }
    render();
    frame = settled ? 0 : window.requestAnimationFrame(animate);
    if (settled) lastTime = 0;
  };
  const setTarget = (pitch, orbit) => {
    targetPitch = pitch;
    targetOrbit = orbit;
    // Deliberate mouse input remains responsive when OS animations are disabled.
    // Reduced motion removes the eased transition, not the pointer interaction.
    if (reducedMotionQuery.matches) {
      window.cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      currentPitch = targetPitch;
      currentOrbit = targetOrbit;
      render();
      return;
    }
    if (!frame && (Math.abs(targetPitch - currentPitch) >= settlingThreshold ||
        Math.abs(targetOrbit - currentOrbit) >= settlingThreshold)) {
      lastTime = 0;
      frame = window.requestAnimationFrame(animate);
    }
  };
  const updatePointerTarget = () => {
    if (!lastPointer) return;
    const clamp = (value) => Math.max(-1, Math.min(1, value));
    const normalizedX = clamp(lastPointer.x / window.innerWidth * 2 - 1);
    const normalizedY = clamp(lastPointer.y / window.innerHeight * 2 - 1);
    setTarget(-normalizedY * maxPitch, -normalizedX * maxOrbit);
  };
  const trackPointer = (event) => {
    if (event.pointerType !== "mouse") return;
    lastPointer = { x: event.clientX, y: event.clientY };
    updatePointerTarget();
  };
  // Track the full viewport and retain the orientation when leaving the hero,
  // scrolling, or moving outside the window.
  window.addEventListener("pointermove", trackPointer, { passive: true });
  window.addEventListener("resize", updatePointerTarget, { passive: true });
  const resetPreference = () => {
    window.cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
    currentPitch = currentOrbit = targetPitch = targetOrbit = 0;
    render();
  };
  reducedMotionQuery.addEventListener("change", resetPreference);
  render();
}
