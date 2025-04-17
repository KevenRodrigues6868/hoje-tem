CREATE TABLE event
(
    id              UUID                        NOT NULL,
    title           VARCHAR(255)                NOT NULL,
    description     VARCHAR(255)                NOT NULL,
    location        VARCHAR(255),
    start_time      TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    end_time        TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    calendar_id     UUID                        NOT NULL,
    google_event_id VARCHAR(255),
    created_at      TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at      TIMESTAMP WITHOUT TIME ZONE,
    CONSTRAINT pk_event PRIMARY KEY (id)
);
COMMENT ON COLUMN event.id IS 'Identificador único do evento';
COMMENT ON COLUMN event.title IS 'Título do evento (ex: ''Aula 01 - Introdução'')';
COMMENT ON COLUMN event.description IS 'Descrição do evento (conteúdo da aula, por exemplo)';
COMMENT ON COLUMN event.location IS 'Local do evento (sala, link de reunião, etc.)';
COMMENT ON COLUMN event.start_time IS 'Data e hora de início do evento';
COMMENT ON COLUMN event.end_time IS 'Data e hora de término do evento';
COMMENT ON COLUMN event.calendar_id IS 'Calendário ao qual o evento pertence';
COMMENT ON COLUMN event.google_event_id IS 'ID do evento no Google Agenda (se já tiver sido criado)';
COMMENT ON COLUMN event.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN event.updated_at IS 'Data e hora da última atualização do registro';

ALTER TABLE event
    ADD CONSTRAINT FK_EVENT_ON_CALENDAR FOREIGN KEY (calendar_id) REFERENCES calendar (id);