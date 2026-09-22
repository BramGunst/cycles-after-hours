# Cycles After Hours

Custom Blender 5.2.2 LTS development project extending Cycles with experimental renderer features.

The first feature is **Viewport Motion Blur**: true Cycles shutter-based motion blur directly inside the Rendered Viewport.

## Base

Blender 5.2.2 LTS

Base Blender commit:

`d13f752e3b9c`

The source patches in this repository are kept separately from the full Blender source tree to avoid mirroring Blender's large Git/LFS history.

## Viewport Motion Blur

Adds:

`Render Properties > Motion Blur > Viewport Motion Blur`

When enabled, the Cycles Rendered Viewport uses Cycles' existing motion blur system.

It reuses existing Cycles functionality including:

- Shutter
- Shutter Position: Start / Center / End
- Shutter Curve
- Rolling Shutter
- Object Motion Steps
- Deformation Motion
- Camera Motion
- CPU / CUDA / OptiX
- Viewport Denoising

No screen-space, vector or compositor motion blur is used.

## Versions

### v0.1

Initial implementation of true Cycles motion blur in the Rendered Viewport.

Patch:

`features/viewport-motion-blur/v0.1/0001-Add-true-Cycles-motion-blur-to-rendered-viewport.patch`

### v0.1.1

Fixes viewport motion corruption when changing Motion Steps.

Patch:

`features/viewport-motion-blur/v0.1.1/0002-Fix-viewport-motion-corruption-when-changing-Motion-.patch`

### v0.2

Adds two further improvements.

#### Point / particle motion BVH fix

Fixes native Cycles point primitives with radius when Viewport Motion Blur is enabled while an OptiX Rendered Viewport is already running.

The fix makes Cycles rebuild the point BVH when the primitive layout changes from static points to motion points instead of attempting an incompatible refit.

Patch:

`features/viewport-motion-blur/v0.2/0003-Fix-point-motion-BVH-rebuild-on-viewport-blur-toggle.patch`

#### Live unkeyed transform preview

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

The implementation reuses Blender's existing Action, keyframe and animation evaluation systems and Cycles' existing shutter sampling.

It does not implement custom FCurve interpolation or fake motion blur.

Patch:

`features/viewport-motion-blur/v0.2/0004-Add-live-unkeyed-transform-preview-for-viewport-motion-blur.patch`

## Applying the patches

The patches are incremental.

Apply them in order to the matching Blender 5.2.2 source tree:

```text
v0.1   -> 0001
v0.1.1 -> 0002
v0.2   -> 0003
v0.2   -> 0004