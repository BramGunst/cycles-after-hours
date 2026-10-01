# Cycles After Hours

Hello, I'm Bram Gunst.

I finally got viewport motion blur working in Blender!

I have wanted this in Blender for a long time. Motion blur changes how an animation feels, so being able to see it interactively while I work makes a huge difference.

Cycles After Hours is my personal project where I experiment with features I would love to see in Cycles. Viewport Motion Blur is the first feature I wanted to tackle, and I wanted to do it properly using the real Cycles motion blur system directly in the Rendered Viewport.

- No compositor tricks
- No vector pass
- No screen-space approximation

This is a custom Blender/Cycles build, not an addon. The renderer is still called Cycles and normal `.blend` files keep working like usual.

Cycles After Hours is unofficial and is not affiliated with the Blender Foundation.

## Download

The current build is **Viewport Motion Blur v0.2.1** for **Blender 5.2.2 LTS** on **Windows x64**.

[Download the Windows build](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.1/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.1-Windows-x64.zip)

You can also read the [release notes](https://github.com/BramGunst/cycles-after-hours/releases/tag/viewport-motion-blur-v0.2.1).

This is still a pre-release while I test it on more machines.

SHA-256:

`129E80EB6EABCD88F90B3BF983DB3B2D7A6AD62986C9594E594C05B1C6CF40B1`

## Getting Started

There is no addon to install.

1. Download the Windows ZIP
2. Extract it wherever you like
3. Run `blender.exe`
4. Select Cycles and enable Motion Blur + Viewport Motion Blur under `Render Properties > Motion Blur`
5. Switch to the Rendered Viewport

That's it.

Existing `.blend` files remain normal Blender files. The Viewport Motion Blur checkbox only controls the viewport and does not change which motion blur settings apply to F12 rendering.

## Supported Features

Viewport Motion Blur works with the existing Cycles motion blur controls and sampling.

- Live Transform Preview
- Camera Motion
- Deformation Motion
- Deformation Steps
- Shutter Position and Shutter Curve
- Rolling Shutter
- Volume Motion Blur
- Particles & Points
- CPU / CUDA / OptiX
- Viewport Denoising

Live Transform Preview lets you move an animated object or camera on an unkeyed frame and see the motion blur update before adding another keyframe.

Camera Motion uses the actual animated camera motion in camera view. Navigating around a free-perspective view is not treated as shutter-time camera animation.

Per-object Deformation Steps and Use Motion Blur are respected. Shutter duration, Shutter Position and the existing Shutter Curve use the normal Cycles controls.

Shape keys and stable-topology Geometry Nodes deformation have been tested, along with native point and radius geometry. Existing Cycles Volume Motion Blur is also used where supported.

The main focus is getting correct motion blur while working on a paused frame. Real-time playback performance is not guaranteed.

Arbitrary simulations, caches and changing topology are not exhaustively tested yet, and the current tests do not cover every GPU or driver configuration. Custom shutter curves are reused by the viewport but were not separately exercised by the documented regression tests.

## Source Code

If you want to see exactly what changed, this repository contains the incremental source patches used for Cycles After Hours.

The patches are based on Blender revision:

`d13f752e3b9c`

The repository does not contain a full Blender checkout or the compiled build itself.

[SOURCE.md](SOURCE.md) contains the complete corresponding source download, dependency source packages, checksums, licensing information and build provenance.

It also explains why the current executable reports:

`b5330961223e (modified)`

instead of the later hotfix commit.

### Applying the Patches

The full [patch sequence and application commands](SOURCE.md#applying-the-patches) are documented in SOURCE.md.

You can also check the [version history](SOURCE.md#version-history) to see what changed in each patch.

## Reporting Issues

If something does not work as expected, [open an issue on GitHub](https://github.com/BramGunst/cycles-after-hours/issues).

Please include:

- Blender version
- GPU model
- render device
- steps to reproduce the problem

If Blender crashes, attach the crash log if you have it. That makes it much easier for me to figure out what went wrong.
