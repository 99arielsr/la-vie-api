 CREATE DATABASE lavie;

  use lavie;

 CREATE TABLE pacientes (
   ID INT PRIMARY KEY auto_increment,
   nome VARCHAR(200) NOT NULL,
   email VARCHAR(200), 
   data_nascimento DATE NOT NULL
   );

 CREATE TABLE psicologos (
   id INT PRIMARY KEY auto_increment,
   nome VARCHAR(200) NOT NULL,
   email VARCHAR(45) NOT NULL, 
   apresentacao VARCHAR(255),
   senha VARCHAR(255) NOT NULL
   );
 
    CREATE TABLE atendimentos (
    id INT PRIMARY KEY auto_increment,
    data_atendimento DATETIME NOT NULL,
    observacao VARCHAR(255),
    pacientes_id INT NOT NULL,
    psicologos_id INT NOT NULL,

    CONSTRAINT FK_Pacientes FOREIGN KEY (pacientes_id) REFERENCES pacientes(id) ON DELETE CASCADE,
    CONSTRAINT FK_Psicologos FOREIGN KEY (psicologos_id) REFERENCES psicologos(id) ON DELETE CASCADE
    );