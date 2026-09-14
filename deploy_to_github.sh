#!/bin/bash
# Ushbu skriptni ishga tushirish orqali ushbu papkadagi barcha kodlar
# Sizning https://github.com/shohabbosdev/veb-tizimlari repozitoriyingizga yuklanadi.

echo ">>> GitHub repozitoriysiga yuklash boshlanmoqda..."
cd "$(dirname "$0")"

git init
git add .
git commit -m "Initial commit: Veb tizimlari fani 18 ta amaliy mashg'ulot to'liq kodlar bazasi"
git branch -M main
git remote add origin https://github.com/shohabbosdev/veb-tizimlari.git
git push -u origin main --force

echo ">>> Muvaffaqiyatli yakunlandi! Repozitoriy manzili: https://github.com/shohabbosdev/veb-tizimlari"
