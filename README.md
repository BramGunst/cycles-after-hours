# Cycles Viewport Motion Blur

Custom Blender 5.2.2 LTS modification adding true Cycles motion blur
to the Rendered Viewport.

## Base

Blender 5.2.2 LTS

Base Blender commit:
d13f752e3b9c

Custom working commit:
5dad52a8460

Local tag:
viewport-motion-blur-v0.1

## Feature

Adds one new option under:

Render Properties > Motion Blur > Viewport Motion Blur

When enabled, the Cycles Rendered Viewport uses Cycles' existing
true shutter-based motion blur system.

It reuses existing Cycles settings including:

- Shutter
- Shutter Position
- Shutter Curve
- Rolling Shutter
- Object Motion Steps
- Object Deformation Motion
- Camera Motion
- GPU Compute
- Viewport Denoising

No screen-space, vector or compositor motion blur is used.

## Restore

1. Clone Blender.
2. Checkout the Blender 5.2 release branch.
3. Apply the patch in this repository.
4. Run `make update`.
5. Build Blender.

Example:

git am 0001-Add-true-Cycles-motion-blur-to-rendered-viewport.patch

## Status

v0.1 is the first known-good implementation.

A completely fresh build verification is currently being performed.

## Notes

Real-time timeline playback is not currently a target.
The primary use case is true Cycles motion blur in a progressively
rendered viewport while stopped on a frame.
