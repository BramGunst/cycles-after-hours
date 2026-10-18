# Cycles After Hours

Hello, I'm Bram Gunst.

Cycles After Hours is my personal project where I experiment with features I would love to see in Cycles. Viewport Motion Blur was the first feature I wanted to tackle, and now I'm working on Geometry Distance as well.

This is a custom Blender/Cycles build, not an addon. Cycles After Hours is unofficial and is not affiliated with the Blender Foundation.

[Website](https://bramgunst.github.io/cycles-after-hours-site/)

## Features

### Viewport Motion Blur

**Available - v0.2.2**

I have wanted viewport motion blur in Blender for a long time. Motion blur changes how an animation feels, so being able to see it interactively while I work makes a huge difference.

Viewport Motion Blur brings true Cycles shutter-based motion blur to the Rendered Viewport, using the existing Cycles motion blur system.

- Live transform preview
- Camera and deformation motion
- Shutter settings and rolling shutter
- Particles, points and volumes
- CPU, CUDA and OptiX

No compositor tricks, vector passes or screen-space approximations.

[Download v0.2.2](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.2/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.2-Windows-x64.zip) | [Source Code](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.2/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.2-Source.tar.xz) | [Release Notes](https://github.com/BramGunst/cycles-after-hours/releases/tag/viewport-motion-blur-v0.2.2)

### Geometry Distance

**Experimental Build Available - v0.1.0**

An experimental distance shader for Cycles. Still in development.

[Download v0.1.0](https://github.com/BramGunst/cycles-after-hours-site/releases/download/individual-geometry-distance-v0.1.0/Cycles-After-Hours_Blender-5.2.2_Geometry-Distance-v0.1.0-Windows-x64.zip) | [Source Code](https://github.com/BramGunst/cycles-after-hours-site/releases/download/individual-geometry-distance-v0.1.0/Cycles-After-Hours_Blender-5.2.2_Geometry-Distance-v0.1.0-Source.tar.xz) | [Release Notes](https://github.com/BramGunst/cycles-after-hours-site/releases/tag/individual-geometry-distance-v0.1.0)

## Builds & Downloads

Cycles After Hours has two main types of builds: individual builds and full releases. I also share early combined test builds while features are still in development.

**Individual Builds**

Builds focused on specific experimental features, available separately.

**Combined Test Builds**

Early builds that bring multiple features together for testing before an official release.

These are experimental and may contain unfinished features.

**Full Releases**

The complete Cycles After Hours build, bringing the features together.

The next planned full release is **Cycles After Hours v0.3.0**. It is not available yet.

For now, Viewport Motion Blur v0.2.2 is the latest published build in the main repository.

[View GitHub Releases](https://github.com/BramGunst/cycles-after-hours/releases)

## Getting Started

Cycles After Hours is a custom Blender build, so there's no addon to install.

For the Viewport Motion Blur Windows build:

1. Download and extract the ZIP.
2. Run `blender.exe`.
3. Select Cycles and enable Motion Blur and Viewport Motion Blur under `Render Properties > Motion Blur`.
4. Switch to the Rendered Viewport.

Existing `.blend` files work like usual.

## Source Code

This repository contains the source patches and development history for Cycles After Hours.

You can find the build information, checksums, licensing details and source instructions in [SOURCE.md](SOURCE.md).

The complete corresponding source for Viewport Motion Blur v0.2.2 is available [here](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.2/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.2-Source.tar.xz).

Geometry Distance source, checksums and build provenance are documented [here](features/geometry-distance/v0.1.0/README.md).

GitHub's automatically generated source archives only contain this patch repository, not the complete modified Blender source.

## Reporting Issues

If something doesn't work as expected, feel free to [open an issue](https://github.com/BramGunst/cycles-after-hours/issues).

Please include your Blender version, GPU model, render device and steps to reproduce the issue. If Blender crashes, a crash log is helpful too.
