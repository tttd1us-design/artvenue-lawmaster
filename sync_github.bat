@echo off
chcp 65001 > nul
echo ========================================================
echo  🐙 GitHub 즉시 커밋 및 원격 저장소 동기화 중...
echo ========================================================

cd /d "%~dp0"

git add -A
git commit -m "manual: Save workspace changes [%date% %time%]"
git push origin master

echo.
echo ========================================================
echo  ✅ GitHub 동기화가 완료되었습니다.
echo ========================================================
pause
