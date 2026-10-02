# Source and build provenance

The [v0.2.1 Windows x64 release](https://github.com/BramGunst/cycles-after-hours/releases/tag/viewport-motion-blur-v0.2.1) is a modified Blender 5.2.2 LTS build with Viewport Motion Blur. Its Blender source base is revision [`d13f752e3b9c`](https://projects.blender.org/blender/blender/commit/d13f752e3b9c) in the [upstream Blender repository](https://projects.blender.org/blender/blender). This repository contains incremental Git patches rather than a full Blender checkout. Applied to that base, the five patches reconstruct the hotfix source tree exactly. This was verified using a separate temporary Git index.

Apply these patches in order to that base:

| Version | Patch |
| --- | --- |
| v0.1.0 | [`0001`](features/viewport-motion-blur/v0.1.0/0001-Add-true-Cycles-motion-blur-to-rendered-viewport.patch) |
| v0.1.1 | [`0002`](features/viewport-motion-blur/v0.1.1/0002-Fix-viewport-motion-corruption-when-changing-Motion-.patch) |
| v0.2.0 | [`0003`](features/viewport-motion-blur/v0.2.0/0003-Fix-point-motion-BVH-rebuild-on-viewport-blur-toggle.patch) |
| v0.2.0 | [`0004`](features/viewport-motion-blur/v0.2.0/0004-Add-live-unkeyed-transform-preview-for-viewport-motion-blur.patch) |
| v0.2.1 | [`0005`](features/viewport-motion-blur/v0.2.1/0005-Fix-initial-viewport-motion-blur-overlay-crash.patch) |

Each patch builds on the preceding one. The [application commands](#applying-the-patches) are below. The separate support patch contains documentation and regression scripts; it is not part of the five feature patches above.

The v0.2.1 binary was compiled from the working tree containing the hotfix before that hotfix was committed as [`2c58aabc791`](https://projects.blender.org/blender/blender/commit/2c58aabc791). As a result, `blender --version` reports `b5330961223e (modified)`. It does **not** embed `2c58aabc791` as its reported revision.

The [distributed ZIP](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.1/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.1-Windows-x64.zip) has SHA-256 `129E80EB6EABCD88F90B3BF983DB3B2D7A6AD62986C9594E594C05B1C6CF40B1`.

## Complete corresponding source

The [v0.2.1 source archive](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.1/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.1-Source.tar.xz) is an additional asset on the same GitHub release as the binary. Its exact filename is `Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.1-Source.tar.xz`. Its SHA-256 is `222CD25D347B9751948572D725619FE602837E98939B931A264235F0DBAA78FA`.

The archive contains the complete modified Blender source tree at hotfix commit [`2c58aabc791`](https://projects.blender.org/blender/blender/commit/2c58aabc791), including Blender's build and license files. It also contains the 117 hash-verified dependency source packages collected by Blender's `source_archive_complete` tooling. Its top-level directories are `blender-5.2.2/` and `packages/`. All 13,298 extracted Blender source files and 117 dependency packages were compared with the clean hotfix worktree and downloaded package inputs. The five patches above remain available as incremental development history; the release archive is the complete-source download for recipients of the binary.

GitHub's automatically generated Source code ZIP and tar.gz downloads contain this lightweight patch repository. They are not the complete corresponding source package. Use the named `.tar.xz` release asset above for the modified Blender source and dependency packages.

## Licensing

[Blender's licensing guidance](https://www.blender.org/about/license/) says source files are generally `GPL-2.0-or-later`, while some components including Cycles use compatible licenses such as `Apache-2.0`. The assembled Blender binary is distributed under GPL version 3 or later. The modified Blender core files in this patch series carry `GPL-2.0-or-later` headers; the modified Cycles files carry `Apache-2.0` headers. Preserve those per-file notices.

The existing v0.2.1 ZIP already contains Blender's `license/license.md`, `license/licenses.json`, `license/spdx/GPL-3.0-or-later.txt`, `license/spdx/GPL-2.0-or-later.txt`, `license/spdx/Apache-2.0.txt`, other third-party license texts and the Cycles add-on license directory. See the [upstream Blender source and license files](https://projects.blender.org/blender/blender) as well. A blanket root `LICENSE` for this patch repository would obscure the different upstream file licenses, so none has been added. The binary and complete-source release assets contain Blender's applicable license material.

## Applying the Patches

Apply the patches in that order to a suitable Blender 5.2.2 LTS source checkout based on `d13f752e3b9c`. The patches live in this repository. If you clone it as `cycles-after-hours` next to a `blender` checkout, run the following commands from the `cycles-after-hours` directory. Adjust the paths if your checkouts have different names or locations.

```sh
git -C ../blender am ../cycles-after-hours/features/viewport-motion-blur/v0.1.0/0001-Add-true-Cycles-motion-blur-to-rendered-viewport.patch
git -C ../blender am ../cycles-after-hours/features/viewport-motion-blur/v0.1.1/0002-Fix-viewport-motion-corruption-when-changing-Motion-.patch
git -C ../blender am ../cycles-after-hours/features/viewport-motion-blur/v0.2.0/0003-Fix-point-motion-BVH-rebuild-on-viewport-blur-toggle.patch
git -C ../blender am ../cycles-after-hours/features/viewport-motion-blur/v0.2.0/0004-Add-live-unkeyed-transform-preview-for-viewport-motion-blur.patch
git -C ../blender am ../cycles-after-hours/features/viewport-motion-blur/v0.2.1/0005-Fix-initial-viewport-motion-blur-overlay-crash.patch
```

Stop after the patch for the version you want.

The separate [support patch](support/0001-Add-Cycles-After-Hours-docs-and-regression-suite.patch) exports documentation and regression scripts. It includes an LFS pointer for a `.blend` test scene, but this lightweight repository does not contain that scene's binary data. Applying the support patch alone will not supply a usable copy of that scene.

## Version History

### v0.1.0

Initial implementation of true Cycles motion blur in the Rendered Viewport.

Patch:

`features/viewport-motion-blur/v0.1.0/0001-Add-true-Cycles-motion-blur-to-rendered-viewport.patch`

### v0.1.1

Fixes viewport motion corruption when changing Deformation Steps.

Patch:

`features/viewport-motion-blur/v0.1.1/0002-Fix-viewport-motion-corruption-when-changing-Motion-.patch`

### v0.2.0

Adds a point motion BVH fix and live transform preview.

#### Point / Particle Motion BVH Fix

Fixes native Cycles point primitives with radius when Viewport Motion Blur is enabled while an OptiX Rendered Viewport is already running.

Cycles now rebuilds the point BVH when the primitive layout changes from static points to motion points instead of attempting an incompatible BVH refit.

Patch:

`features/viewport-motion-blur/v0.2.0/0003-Fix-point-motion-BVH-rebuild-on-viewport-blur-toggle.patch`

#### Live Unkeyed Transform Preview

Adds live motion-blur preview while interactively transforming an animated object or camera before inserting the new keyframe.

Supported and verified:

- Object location
- Object rotation
- Object scale
- Camera location
- Camera rotation
- Start shutter
- Center shutter
- End shutter
- Transform confirm
- Transform cancel
- CPU
- CUDA
- OptiX

The implementation uses Blender's existing Action, keyframe, animation evaluation and Cycles shutter-sampling systems.

It does not implement custom FCurve interpolation or fake motion blur.

Patch:

`features/viewport-motion-blur/v0.2.0/0004-Add-live-unkeyed-transform-preview-for-viewport-motion-blur.patch`

### v0.2.1

Crash-fix release for Viewport Motion Blur.

#### Initial Rendered Viewport Overlay Crash Fix

Fixes a crash that could occur with native point/particle geometry when Viewport Motion Blur was already enabled before entering Rendered Viewport shading.

Cycles shutter evaluation could update evaluated geometry after viewport overlay batches had already been collected, leaving the overlay draw path with stale geometry data.

The fix moves the external renderer's existing initial `view_update` before overlay batch synchronization.

No point-motion, BVH, OptiX or motion-blur algorithm was changed.

Verified with:

- OptiX initial Motion Blur ON -> Rendered Viewport
- OptiX OFF -> Rendered -> ON
- OptiX ON -> OFF -> ON
- Leaving and re-entering Rendered Viewport with Motion Blur ON
- CUDA and CPU
- Native point particles
- Sphere instances
- F12 rendering
- Live object and camera transform preview

Patch:

`features/viewport-motion-blur/v0.2.1/0005-Fix-initial-viewport-motion-blur-overlay-crash.patch`
