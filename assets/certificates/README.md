---
noteId: "6d3f9210aa0011f08b405181752e00dd"
tags: []

---

# Certificates Directory

This directory contains PDF certificates that can be viewed directly in the portfolio.

## File Structure

```
public/assets/certificates/
├── sql-certificate.pdf
├── cybersecurity-certificate.pdf
├── OIAI25-ER35KX.pdf (AI Literacy Certificate)
└── README.md (this file)
```

## Adding New Certificates

1. **Add PDF file**: Place your certificate PDF in this directory
2. **Update data**: Add the certificate information to `src/utils/constants.js` in the `CERTIFICATIONS_DATA` array
3. **Update component**: The certificate will automatically appear in the Resume section

## Certificate Data Format

```javascript
{
  title: 'Certificate Title',
  subtitle: 'Issuing Organization',
  date: 'YYYY',
  icon: 'FaCertificate',
  credentialId: 'CERT-ID-001',
  issuer: 'Organization Name',
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  pdfUrl: '/assets/certificates/certificate-filename.pdf',
  description: 'Certificate description...',
}
```

## Features

- **Inline PDF Viewer**: Certificates open in a modal with full PDF viewing capabilities
- **Download Option**: Users can download certificates directly
- **Responsive Design**: Works on all devices
- **Professional Display**: Clean, organized presentation

## File Naming Convention

- Use lowercase with hyphens: `certificate-name.pdf`
- Keep filenames descriptive but concise
- Avoid spaces and special characters

## Current Certificates

Your portfolio now displays these professional certificates:

1. **SQL Training Certificate** (Learnomate Technologies)
2. **Cybersecurity Training** (ICT Authority Kenya)  
3. **AI Literacy Certified Course** (Otermans Institute)

## Resume Section Structure

The Resume section is now organized with the following tab order:

1. **Education** - Academic qualifications and courses (AI Literacy appears last as 2025-2025)
2. **Certifications** - Professional certificates with PDF viewing
3. **Personal Skills** - Technical and soft skills
4. **Experience** - Work history and professional experience

## Education Timeline Order

1. Bachelor of Science in Information Technology (2017-2023)
2. SQL Training Certificate (2024-2024)
3. Cybersecurity Training (2024-2024)
4. Software Development (2025-Present)
5. **AI Literacy Certified Course (2025-2025)** - Latest completion
