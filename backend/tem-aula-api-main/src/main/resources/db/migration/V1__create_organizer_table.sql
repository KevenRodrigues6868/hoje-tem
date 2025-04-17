

CREATE TABLE organizer
(
    id         UUID                        NOT NULL,
    name       VARCHAR(255)                NOT NULL,
    email      VARCHAR(255)                NOT NULL,
    google_id  VARCHAR(255)                NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE,
    CONSTRAINT pk_organizer PRIMARY KEY (id)
);
COMMENT ON COLUMN organizer.id IS 'Identificador único do organizador';
COMMENT ON COLUMN organizer.name IS 'Nome completo do organizador';
COMMENT ON COLUMN organizer.email IS 'E-mail do organizador, utilizado para login e notificações';
COMMENT ON COLUMN organizer.google_id IS 'ID do usuário vinculado ao Google para integração com a Google Agenda';
COMMENT ON COLUMN organizer.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN organizer.updated_at IS 'Data e hora da última atualização do registro';

ALTER TABLE organizer
    ADD CONSTRAINT uc_organizer_email UNIQUE (email);

ALTER TABLE organizer
    ADD CONSTRAINT uc_organizer_googleid UNIQUE (google_id);