

CREATE TABLE calendar
(
    id           UUID                        NOT NULL,
    title        VARCHAR(255)                NOT NULL,
    description  VARCHAR(255),
    share_link   VARCHAR(255)                NOT NULL,
    organizer_id UUID                        NOT NULL,
    created_at   TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at   TIMESTAMP WITHOUT TIME ZONE,
    CONSTRAINT pk_calendar PRIMARY KEY (id)
);
COMMENT ON COLUMN calendar.id IS 'Identificador único do calendário';
COMMENT ON COLUMN calendar.title IS 'Título do calendário (ex: ''Disciplina de Engenharia de Software'')';
COMMENT ON COLUMN calendar.description IS 'Descrição opcional do calendário';
COMMENT ON COLUMN calendar.share_link IS 'Link de compartilhamento do calendário';
COMMENT ON COLUMN calendar.organizer_id IS 'Organizador que criou este calendário';
COMMENT ON COLUMN calendar.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN calendar.updated_at IS 'Data e hora da última atualização do registro';

ALTER TABLE calendar
    ADD CONSTRAINT FK_CALENDAR_ON_ORGANIZER FOREIGN KEY (organizer_id) REFERENCES organizer (id);