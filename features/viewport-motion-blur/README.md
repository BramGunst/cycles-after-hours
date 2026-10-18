# Viewport Motion Blur

True Cycles shutter-based motion blur in the Rendered Viewport, using the existing Cycles motion-blur system.

Current published version: **v0.2.2**. Blender **5.2.2 LTS**, **Windows x64**, with verified **Cycles CPU, CUDA and OptiX** support.

[Windows ZIP](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.2/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.2-Windows-x64.zip) | [Complete corresponding source](https://github.com/BramGunst/cycles-after-hours/releases/download/viewport-motion-blur-v0.2.2/Cycles-After-Hours_Blender-5.2.2_Viewport-Motion-Blur-v0.2.2-Source.tar.xz) | [Release notes](https://github.com/BramGunst/cycles-after-hours/releases/tag/viewport-motion-blur-v0.2.2)

## Source and build identity

The source is based on Blender revision `d13f752e3b9c4f8c261cda552b1021f8bcc0382c`. The v0.2.2 binary was built from committed hotfix source `2c58aabc79121df884358236b28d4a56468f0c6c` and reports `2c58aabc7912`.

**v0.2.2 uses the same Viewport Motion Blur source as v0.2.1.** Its updated NVIDIA CUDA build configuration broadens GPU architecture support. There is no new v0.2.2 feature patch or patch folder. The complete source archive is byte-for-byte identical to the v0.2.1 source archive.

Use the named complete-source release asset for the modified Blender source, dependency sources and original license files. GitHub's automatic source snapshots contain only this patch repository.

## Version history and patches

Apply the five incremental patches in order to the Blender base above, stopping after the version you need. See [patch application instructions](../../SOURCE.md#applying-the-patches).

| Version | Changes and patches |
| --- | --- |
| v0.1.0 | Initial Rendered Viewport motion blur: [0001](v0.1.0/0001-Add-true-Cycles-motion-blur-to-rendered-viewport.patch). |
| v0.1.1 | Fix motion corruption after changing per-object Motion Steps: [0002](v0.1.1/0002-Fix-viewport-motion-corruption-when-changing-Motion-.patch). |
| v0.2.0 | Fix point motion BVH rebuilding: [0003](v0.2.0/0003-Fix-point-motion-BVH-rebuild-on-viewport-blur-toggle.patch). Add live object and camera transform preview: [0004](v0.2.0/0004-Add-live-unkeyed-transform-preview-for-viewport-motion-blur.patch). |
| v0.2.1 | Fix the initial Rendered Viewport overlay crash with native point/particle geometry: [0005](v0.2.1/0005-Fix-initial-viewport-motion-blur-overlay-crash.patch). |
| v0.2.2 | Updated Windows GPU build configuration; feature source unchanged from v0.2.1, with no additional patch. |

## Checksums

Windows ZIP SHA-256: `D2E986E370EF0192B41E76EBA47F229A826974CA9860E4969C9EF03D1B1ACA6E`

Complete source SHA-256: `222CD25D347B9751948572D725619FE602837E98939B931A264235F0DBAA78FA`

## Source documentation and licensing

[SOURCE.md](../../SOURCE.md) contains the detailed build configuration, verification history, [complete-source information](../../SOURCE.md#complete-corresponding-source) and [licensing details](../../SOURCE.md#licensing).

The assembled Blender binary is distributed under GPL version 3 or later. Source files and dependencies retain their applicable licenses, including the modified Blender core files' GPL-2.0-or-later and Cycles files' Apache-2.0 notices. Preserve the license notices included in the Windows and complete-source archives.
