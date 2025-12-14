const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '20251106_115513.jpg');
const destFile = path.join(__dirname, 'assets', 'images', 'splash-icon.jpg');

console.log('בדיקת קבצים...');
console.log('מקור:', sourceFile);
console.log('קיים?', fs.existsSync(sourceFile));
console.log('יעד:', destFile);

try {
  if (fs.existsSync(sourceFile)) {
    // קריאת הקובץ המקור
    const sourceBuffer = fs.readFileSync(sourceFile);
    console.log('גודל קובץ מקור:', sourceBuffer.length, 'bytes');
    
    // כתיבה ליעד
    fs.writeFileSync(destFile, sourceBuffer);
    console.log('✅ התמונה הועתקה בהצלחה!');
    
    // בדיקה שהקובץ נוצר
    if (fs.existsSync(destFile)) {
      const destBuffer = fs.readFileSync(destFile);
      console.log('גודל קובץ יעד:', destBuffer.length, 'bytes');
      console.log('הקבצים זהים:', sourceBuffer.equals(destBuffer));
    }
  } else {
    console.log('❌ הקובץ המקור לא נמצא:', sourceFile);
    console.log('נסה לוודא שהקובץ נמצא בתיקיית הפרויקט');
  }
} catch (error) {
  console.error('❌ שגיאה:', error.message);
  process.exit(1);
}

