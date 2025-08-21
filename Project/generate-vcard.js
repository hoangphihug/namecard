const fs = require('fs');
const path = require('path');

const USERS = {
  "hoang-phi-hung": {
    name: "Hoàng Phi Hùng",
    role: "Nhân viên IT",
    avatar: "images/hoang-phi-hung.jpg",
    email: "hung@example.com",
    phone: "0123456789",
    social: "https://example.com/hoangphihung",
    socialText: "",
    zalo: "https://zalo.me/0388184606",
    about: "Tôi là một nhân viên IT yêu thích công nghệ, luôn sẵn sàng học hỏi và chia sẻ kiến thức."
  },
  // ... các user khác ...
};

const vcardFolder = path.join(__dirname, 'vcard');
if (!fs.existsSync(vcardFolder)) fs.mkdirSync(vcardFolder);

for (const slug in USERS) {
  const user = USERS[slug];
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${user.name}
ORG:Công ty cổ phần thép Nam Kim
TITLE:${user.role}
TEL;TYPE=CELL:${user.phone}
EMAIL:${user.email}
END:VCARD`;
  fs.writeFileSync(path.join(vcardFolder, `${slug}.vcf`), vcard, 'utf8');
}
console.log('Đã tạo xong các file vCard!');
