import React from "react";

const Projects = () => {
  return (
    <div className="poppins-thin">
      <h2>Meus Projetos</h2>
      <ul>
        <li>
          <a
            href="https://marcolinonvs.github.io/otal.github.io/index.html"
            className="link"
            style={{ marginBottom: "10px" }}
            target="_blank" // Adiciona o atributo target para abrir em nova aba
            rel="noopener noreferrer" // Para segurança, especialmente ao usar target="_blank"
          >
            Portfólio beta
          </a>
        </li>
        <li>The Boteco "em andamento"</li>
      </ul>
    </div>
  );
};

export default Projects;
