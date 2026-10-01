# Cycles After Hours

I'm Bram Gunst, and Cycles After Hours is my personal project for trying out features I would love to have in Cycles. The first is **Viewport Motion Blur**. I've wanted to see motion blur while working on an animation for a long time because it changes how the motion feels.

Viewport Motion Blur uses the real Cycles shutter-based motion blur system in the Rendered Viewport. It does not use compositor tricks, a vector pass or a screen-space approximation.

This is a custom Blender/Cycles build, **not an addon**. The renderer is still called Cycles. The project is unofficial and is not affiliated with the Blender Foundation.

## Download

The current build is **Viewport Motion Blur v0.2.1**, based on **Blender 5.2.2 LTS** for **Windows x64**.

[Download the Windows build](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.1/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.1-Windows-x64.zip) or read the [release notes](https://github.com/BramGunst/cycles-after-hours/releases/tag/viewport-motion-blur-v0.2.1). This is a pre-release; testing on more machines is still in progress.

The ZIP's SHA-256 is `129E80EB6EABCD88F90B3BF983DB3B2D7A6AD62986C9594E594C05B1C6CF40B1`.

## Getting Started

1. Download the Windows ZIP above.
2. Extract it wherever you like.
3. Run `blender.exe`.
4. Select Cycles, enable Motion Blur and Viewport Motion Blur under `Render Properties > Motion Blur`, then use Rendered Viewport shading.

Existing `.blend` files remain normal Blender files. The viewport checkbox does not change which motion blur settings apply to F12 rendering.

## Supported Features

The viewport uses the existing Cycles controls and motion sampling:

- Live Transform Preview for animated objects and cameras before inserting a keyframe, including transform confirm and cancel
- Camera Motion in camera view; navigating a free-perspective view is not shutter-time camera animation
- Deformation Motion where supported, including tested shape keys and stable-topology Geometry Nodes deformation
- Per-object Motion Steps and Use Motion Blur
- Shutter duration, Shutter Position (Start / Center / End) and the existing Shutter Curve
- Rolling Shutter
- Existing Cycles Volume Motion Blur where supported
- Particles & Points, including the native point/radius geometry fixes
- CPU / CUDA / OptiX and existing Viewport Denoising

Paused-frame rendering is the priority. Real-time playback performance is not guaranteed. Arbitrary simulations, caches and changing topology are not exhaustively tested, and the existing tests do not cover every GPU or driver configuration. Custom shutter curves are reused but were not separately exercised by the documented regression suite.

## Source Code

This repository contains documentation and incremental source patches, not a full Blender checkout or the compiled build. The patches target Blender base revision `d13f752e3b9c`.

[SOURCE.md](SOURCE.md) documents the complete corresponding source download, dependency source packages, checksums, licensing and build provenance. It also explains why the executable reports `b5330961223e (modified)` rather than the later hotfix commit.

### Applying the Patches

Use the [patch sequence and application commands](SOURCE.md#applying-the-patches). The [version history](SOURCE.md#version-history) explains what each patch changes.

## Reporting Issues

If something goes wrong, [report it on GitHub](https://github.com/BramGunst/cycles-after-hours/issues). Include your Blender version, GPU model, render device and steps to reproduce it. For a crash, attach the Blender crash log if you have it.

The [website files](docs/index.html) contain the demos and a quick overview of the feature.
