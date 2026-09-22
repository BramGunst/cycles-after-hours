# Cycles After Hours

Custom Blender 5.2.2 LTS development project extending Cycles with experimental renderer features.

The first feature is **Viewport Motion Blur**: true Cycles shutter-based motion blur directly inside the Rendered Viewport.

## Base

Blender 5.2.2 LTS

Base Blender commit:

`d13f752e3b9c`

The source patches in this repository are stored separately from the full Blender source tree to avoid mirroring Blender's large Git/LFS history.

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

No screen-space, vector, or compositor motion blur is used.

## Versions

### v0.1.0

Initial implementation of true Cycles motion blur in the Rendered Viewport.

Patch:

`features/viewport-motion-blur/v0.1.0/0001-Add-true-Cycles-motion-blur-to-rendered-viewport.patch`

### v0.1.1

Fixes viewport motion corruption when changing Motion Steps.

Patch:

`features/viewport-motion-blur/v0.1.1/0002-Fix-viewport-motion-corruption-when-changing-Motion-.patch`

### v0.2.0

Adds two further improvements.

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

The implementation reuses Blender's existing Action, keyframe, animation evaluation, and Cycles shutter-sampling systems.

It does not implement custom FCurve interpolation or fake motion blur.

Patch:

`features/viewport-motion-blur/v0.2.0/0004-Add-live-unkeyed-transform-preview-for-viewport-motion-blur.patch`

### v0.2.1

Crash-fix release for Viewport Motion Blur.

#### Initial Rendered Viewport Overlay Crash Fix

Fixes a crash that could occur with native point/particle geometry when Viewport Motion Blur was already enabled before entering Rendered Viewport shading.

Cycles shutter evaluation could update evaluated geometry after viewport overlay batches had already been collected, leaving the overlay draw path with stale geometry data.

The fix moves the external renderer's existing initial `view_update` before overlay batch synchronization.

No point-motion, BVH, OptiX, or motion-blur algorithm was changed.

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

## Applying the Patches

The patches are incremental and should be applied in order:

```text
v0.1.0 -> 0001
v0.1.1 -> 0002
v0.2.0 -> 0003
v0.2.0 -> 0004
v0.2.1 -> 0005