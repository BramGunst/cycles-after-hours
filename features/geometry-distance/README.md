# Geometry Distance v0.1.0

Experimental individual Blender 5.2.2 LTS build for Windows x64. This distance shader is still in development. It does not include Viewport Motion Blur.

[Release notes](https://github.com/BramGunst/cycles-after-hours-site/releases/tag/individual-geometry-distance-v0.1.0) | [Windows ZIP](https://github.com/BramGunst/cycles-after-hours-site/releases/download/individual-geometry-distance-v0.1.0/Cycles-After-Hours_Blender-5.2.2_Geometry-Distance-v0.1.0-Windows-x64.zip) | [Complete corresponding source](https://github.com/BramGunst/cycles-after-hours-site/releases/download/individual-geometry-distance-v0.1.0/Cycles-After-Hours_Blender-5.2.2_Geometry-Distance-v0.1.0-Source.tar.xz)

## Source and build identity

The binary was compiled from Blender revision d13f752e3b9c4f8c261cda552b1021f8bcc0382c with uncommitted Geometry Distance changes. It reports d13f752e3b9c (modified), with build date 2026-10-15 and build time 22:17:47. The base revision alone does not identify the modified source.

The complete source archive contains the exact modified Blender tree, dependency sources, original licensing, source file manifests and build provenance. It is the authoritative corresponding-source package. GitHub's automatic source snapshots of either project repository are not a substitute.

The included [feature patch](v0.1.0/0001-Add-Geometry-Distance-v0.1.0.patch) applies with git apply to a clean checkout of that Blender base. It reconstructs 105 feature source files with LF line endings. Required data assets and 117 verified dependency source packages are supplied in the complete-source archive.

The recorded source snapshots, compiler source checksums, packaged Cycles sources and linked executable were compared before source export. No implementation change or recompilation was made for publication. The public ZIP is a byte-identical renamed copy of the tested package.

## Checksums

Windows ZIP SHA-256: 699E725D82CC6827F94F83D00823BDD2C6F39D8CBBBB0852AE52F0610E9CCB2A

Complete source SHA-256: A3CBE42122FFC75C2757447E68908E729960654F99CD5BA0C8C1EC1CF0829FAF

[Build provenance](https://github.com/BramGunst/cycles-after-hours-site/releases/download/individual-geometry-distance-v0.1.0/PROVENANCE.md) | [Checksum manifest](https://github.com/BramGunst/cycles-after-hours-site/releases/download/individual-geometry-distance-v0.1.0/SHA256SUMS.txt)

## Compatibility and licensing

Existing extracted-package tests passed on CPU, CUDA and OptiX. GPU validation used an NVIDIA GeForce RTX 4060 Laptop GPU with driver 581.57. Other GPUs and driver versions were not physically validated. Eevee and OSL execution are unsupported; other platforms and render backends are not verified for this release.

Preserve the Blender, Cycles and dependency license notices supplied inside the binary and complete-source archives. The assembled Blender binary is distributed under GPL version 3 or later; source files and dependencies retain their applicable notices. See the archive's provenance and original license files. Existing Viewport Motion Blur documentation in [SOURCE.md](../../SOURCE.md) remains unchanged.
