

export function generateLatexTemplate1(data) {

    
    const {
      introduction,
      education,
      projects,
      certificate,
      experience,
      skills,
    } = data;
  
    console.log("this is the template 1");
  
    const latexContent = `
    \\documentclass[a4paper,10pt]{article}
    \\usepackage[utf8]{inputenc}
    \\usepackage{geometry}
    \\usepackage{enumitem}
    \\usepackage{titlesec}
    \\usepackage{hyperref}
    \\usepackage{xcolor}
    \\usepackage{multicol}
    \\usepackage{parskip}
  
    \\geometry{a4paper, margin=0.5in}
  
    \\titleformat{\\section}{\\Large\\bfseries}{}{0em}{}[\\titlerule]
    \\titleformat{\\subsection}{\\large\\bfseries}{}{0em}{}
  
    \\hypersetup{
        colorlinks=true,
        linkcolor=black,
        filecolor=black,      
        urlcolor=black,
    }
  
    \\newcommand{\\resumeItem}[2]{
      \\item\\textbf{#1}{: #2}
    }
    \\newcommand{\\resumeSubheading}[4]{
      \\item
        \\textbf{#1} \\hfill #2 \\\\
        \\textit{#3} \\hfill \\textit{#4}
    }
    \\newcommand{\\resumeSubSubheading}[2]{
        \\item
        \\textbf{#1} \\hfill #2
    }
  
    \\begin{document}
  
    \\begin{tabbing}
    \\hspace{4in} \\= \\kill
    {\\Huge \\textbf{${introduction.name}}} \\\\
    \\href{mailto:${introduction.email}}{${introduction.email}} \\> 
    \\hspace{1.8in}
    ${introduction.links.linkedin ? `\\href{${introduction.links.linkedin}}{LinkedIn} \\\\` : ''}
    ${introduction.address.city}, ${introduction.address.state}, ${introduction.address.country} \\> \\hspace{1.85in}${introduction.links.github  ? `\\href{${introduction.links.github}}{GitHub} \\\\` : ''} 
    ${introduction.phone} \\\\
    \\end{tabbing}
    \\vspace{-0.4cm}
  
    ${introduction.summary ? `\\section*{Summary}
    \\noindent
    ${introduction.summary}
    \\vspace{-0.5em}` : ''}
  
    ${education.length ? `\\section*{\\textbf{Education}}
    \\begin{itemize}[leftmargin=0.15in, label={}]
        ${education.map(edu => `
        \\resumeSubheading
            {${edu.university}}{${edu.grade} ${edu.percentage ? `${edu.percentage} \\%`: `${edu.sgpa} spga`}}
            {${edu.college}, ${edu.location}}{${edu.passoutYear}}
        \\vspace{-0.1em}`).join('')}
    \\end{itemize}
    \\vspace{-0.5em}` : ''}
  
    ${experience.length ? `\\section*{\\textbf{Work Experience}}
    \\begin{itemize}[leftmargin=0.15in, label={}]
        ${experience.map(exp => `
        \\resumeSubheading
            {${exp.jobTitle}}{${exp.dates.start} - ${exp.dates.end}}
            {${exp.companyName}, ${exp.location}}{}\\\\
            {${exp.description}}{}
        \\vspace{-0.100em}`).join('')}
    \\end{itemize}
    \\vspace{-0.5em}` : ''}
  
    ${projects.length ? `\\section*{\\textbf{Projects}}
    \\begin{itemize}[leftmargin=0.15in, label={}]
        ${projects.map(project => `
        \\resumeSubheading
            {${project.title}}{${project.date}}
            ${project.link.length ? `{\\href{${project.link} }{Project Link}}{}\\\\ \\\\` : `{\\href{}{}}{}\\vspace{0.5em} \\\\`}
            {${project.description}}{}
        \\vspace{0.20em}`).join('')}
    \\end{itemize}
    \\vspace{-0.5em}` : ''}
  
    ${skills.length ? `\\section*{\\textbf{Skills}}\\noindent
    ${skills.map((skill, index) => 
      `\\textbf{${skill}}${index < skills.length - 1 ? ' \\hspace{1em}' : ''}`).join('')}
    \\vspace{0.5em}` : ''}

  
    ${certificate.length ? `\\section*{\\textbf{Certifications and Awards}}
    \\begin{itemize}[leftmargin=0.15in, label={}]
        ${certificate.map(cert => `
        \\resumeSubSubheading{${cert.title} : ${cert.issuedBy}}{${cert.year}}
        
        \\vspace{-0.1em}`).join('')}
    \\end{itemize}` : ''}
  
    \\end{document}
    `;
  
    return latexContent;
}