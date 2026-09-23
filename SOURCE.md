# Source and build provenance

The [v0.2.1 Windows x64 pre-release](https://github.com/BramGunst/cycles-after-hours/releases/tag/viewport-motion-blur-v0.2.1) is a modified Blender 5.2.2 LTS build with Viewport Motion Blur. Its Blender source base is revision [`d13f752e3b9c`](https://projects.blender.org/blender/blender/commit/d13f752e3b9c) in the [upstream Blender repository](https://projects.blender.org/blender/blender). This repository distributes the changes as incremental Git patches, rather than a full Blender checkout.

Apply these patches in order to that base:

| Version | Patch |
| --- | --- |
| v0.1.0 | [`0001`](features/viewport-motion-blur/v0.1.0/0001-Add-true-Cycles-motion-blur-to-rendered-viewport.patch) |
| v0.1.1 | [`0002`](features/viewport-motion-blur/v0.1.1/0002-Fix-viewport-motion-corruption-when-changing-Motion-.patch) |
| v0.2.0 | [`0003`](features/viewport-motion-blur/v0.2.0/0003-Fix-point-motion-BVH-rebuild-on-viewport-blur-toggle.patch) |
| v0.2.0 | [`0004`](features/viewport-motion-blur/v0.2.0/0004-Add-live-unkeyed-transform-preview-for-viewport-motion-blur.patch) |
| v0.2.1 | [`0005`](features/viewport-motion-blur/v0.2.1/0005-Fix-initial-viewport-motion-blur-overlay-crash.patch) |

Each patch builds on the preceding one. The [README](README.md#applying-the-patches) has the `git am` commands. The separate support patch contains documentation and regression scripts; it is not part of the five feature patches above.

The v0.2.1 binary was compiled from the working tree containing the hotfix before that hotfix was committed as [`2c58aabc791`](https://projects.blender.org/blender/blender/commit/2c58aabc791). Consequently, `blender --version` reports `b5330961223e (modified)`. It does **not** embed `2c58aabc791` as its reported revision.

The [distributed ZIP](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.1/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.1-Test-Windows-x64.zip) has SHA-256 `129E80EB6EABCD88F90B3BF983DB3B2D7A6AD62986C9594E594C05B1C6CF40B1`.

## Licensing

Blender is distributed under the GNU General Public License; see [Blender’s license information](https://www.blender.org/about/license/) and its [source and license files](https://projects.blender.org/blender/blender). The modified Blender core files carry `GPL-2.0-or-later` headers. The modified Cycles files carry `Apache-2.0` headers. Those per-file notices remain applicable. This patch repository does not contain a full copy of Blender’s source or a single license that accurately replaces the upstream notices, so no blanket root `LICENSE` has been added. Revisit whether to distribute copies of the applicable upstream license texts alongside the patches and binary when preparing the public release.
