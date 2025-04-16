package com.temaulahoje.api.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@Table(name = "event")
@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Comment("Identificador único do evento")
    private UUID id;

    @Column(nullable = false)
    @Comment("Título do evento (ex: 'Aula 01 - Introdução')")
    private String title;

    @Column(nullable = false)
    @Comment("Descrição do evento (conteúdo da aula, por exemplo)")
    private String description;

    @Column(nullable = true)
    @Comment("Local do evento (sala, link de reunião, etc.)")
    private String location;

    @Column(nullable = false)
    @Comment("Data e hora de início do evento")
    private LocalDateTime startTime;

    @Column(nullable = false)
    @Comment("Data e hora de término do evento")
    private LocalDateTime endTime;

    @ManyToOne(optional = false)
    @JoinColumn(name = "calendar_id", nullable = false)
    @Comment("Calendário ao qual o evento pertence")
    private Calendar calendar;

    @Column(nullable = true)
    @Comment("ID do evento no Google Agenda (se já tiver sido criado)")
    private String googleEventId;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    @Comment("Data e hora de criação do registro")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Comment("Data e hora da última atualização do registro")
    private LocalDateTime updatedAt;
}
