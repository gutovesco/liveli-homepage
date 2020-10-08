import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.ibb.co/wQdwpJR/3738b0c6-12df-4b19-b32b-d9af84eea7c0-200x200.png" className="App-logo" alt="logo" />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginTop: 20, marginRight: 50, display: 'flex', flexDirection: 'column' }}>
            <span style={{ marginBottom: 20 }}>Missão</span>
            <hr className="solid" />
            <span style={{ marginBottom: 20, width: 400 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</span>
          </div>
          <div style={{ marginTop: 20, marginRight: 50, display: 'flex', flexDirection: 'column' }}>
            <span style={{ marginBottom: 20 }}>Valores</span>
            <hr className="solid" />
            <span style={{ marginBottom: 20, width: 400 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</span>
          </div>
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column' }}>
            <span style={{ marginBottom: 20 }}>Visão</span>
            <hr className="solid" />
            <span style={{ marginBottom: 20, width: 400 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</span>
          </div>
        </div>
        <h2 style={{ marginTop: 100 }}>Quem somos nós</h2>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, marginBottom: 100 }}>
          <div style={{ marginTop: 20, marginRight: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: 200, height: 200, borderRadius: 100 }} src="https://media-exp1.licdn.com/dms/image/C4D03AQFAfzHMDRyL2Q/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=feLdyYhL93kXrMiQTM3QpAjXWJLcvYzUSTrvnZG3rY8" />
            <span style={{ marginTop: 20, width: 400, height: 200 }}>Augusto é desenvolvedor de software na Compasso UOL, possui conhecimento nas linguagens Javascript e Dart. Programa usando as tecnologias React, React Native e Flutter. Fluente em inglês com certificação TOEIC.</span>
          </div>
          <div style={{ marginTop: 20, marginRight: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: 200, height: 200, borderRadius: 100 }} src="https://i.ibb.co/kJdb5Ms/Screenshot-4.png" />
            <span style={{ marginTop: 20, width: 400, height: 200 }}>Lucas é gerente na loja Flores na mão e trabalha no help desk da empresa SCJ. Possui experiência na área de negócios e de manutenção de computadores.</span>
          </div>
          <div style={{ marginTop: 20, marginRight: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: 200, height: 200, borderRadius: 100 }} src="https://media-exp1.licdn.com/dms/image/C4D03AQFE7z3GfjHWUw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=MaBjXNcrTu_bb9IUkUGMvc1ubEZiMQrhSH4d84c7Ba4" />
            <span style={{ marginTop: 20, width: 400, height: 200 }}>Samuel é desenvolvedor de software na compasso UOL com foco nas tecnologias React, React Native e Flutter. Possui experiência atuando em projetos e-commerce com magento.</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
