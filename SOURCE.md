# Source and build provenance

The [v0.2.1 Windows x64 pre-release](https://github.com/BramGunst/cycles-after-hours/releases/tag/viewport-motion-blur-v0.2.1) is a modified Blender 5.2.2 LTS build with Viewport Motion Blur. Its Blender source base is revision [`d13f752e3b9c`](https://projects.blender.org/blender/blender/commit/d13f752e3b9c) in the [upstream Blender repository](https://projects.blender.org/blender/blender). This repository distributes the changes as incremental Git patches, rather than a full Blender checkout. The five patches reconstruct the source tree of the hotfix commit exactly when applied to that base; this was verified with a separate temporary Git index.

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

The [distributed ZIP](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.1/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.1-Windows-x64.zip) has SHA-256 `129E80EB6EABCD88F90B3BF983DB3B2D7A6AD62986C9594E594C05B1C6CF40B1`.

## Complete corresponding source

The [v0.2.1 source archive](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.1/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.1-Source.tar.xz) is an additional asset on the same GitHub release as the binary. Its exact filename is `Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.1-Source.tar.xz`, and its SHA-256 is `222CD25D347B9751948572D725619FE602837E98939B931A264235F0DBAA78FA`.

The archive contains the complete modified Blender source tree represented by hotfix commit [`2c58aabc791`](https://projects.blender.org/blender/blender/commit/2c58aabc791), including Blender's build and license files, plus the 117 hash-verified dependency source packages collected by Blender's `source_archive_complete` tooling. Its top-level directories are `blender-5.2.2/` and `packages/`. All 13,298 extracted Blender source files and 117 dependency packages were compared with the clean hotfix worktree and downloaded package inputs. The five patches above remain available as incremental development history; the release archive is the complete-source download for recipients of the binary.

## Licensing

[Blender's licensing guidance](https://www.blender.org/about/license/) says source files are generally `GPL-2.0-or-later`, while some components including Cycles use compatible licenses such as `Apache-2.0`. The assembled Blender binary is distributed under GPL version 3 or later. The modified Blender core files in this patch series carry `GPL-2.0-or-later` headers; the modified Cycles files carry `Apache-2.0` headers. Preserve those per-file notices.

The existing v0.2.1 ZIP already contains Blender's `license/license.md`, `license/licenses.json`, `license/spdx/GPL-3.0-or-later.txt`, `license/spdx/GPL-2.0-or-later.txt`, `license/spdx/Apache-2.0.txt`, other third-party license texts and the Cycles add-on license directory. See the [upstream Blender source and license files](https://projects.blender.org/blender/blender) as well. A blanket root `LICENSE` for this patch repository would obscure the different upstream file licenses, so none has been added. The binary and complete-source release assets contain Blender's applicable license material.
