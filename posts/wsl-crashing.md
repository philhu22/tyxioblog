---
title: WSL Crashing
publish_date: 2023-01-19
---

```cmd
wsl
Catastrophic failure
Error code: Wsl/Service/CreateInstance/E_UNEXPECTED

wsl --status
Default Distribution: Ubuntu-20.04
Default Version: 2
```

Collect the logs:
```powewrshell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/WSL/master/diagnostics/collect-wsl-logs.ps1" -OutFile collect-wsl-logs.ps1
Set-ExecutionPolicy Bypass -Scope Process -Force
.\collect-wsl-logs.ps1
```