package com.temaulahoje.api.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "calendar")
@Getter
@Setter
public class Calendar {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Comment("Identificador único do calendário")
    private UUID id;

    @Column(nullable = false)
    @Comment("Título do calendário (ex: 'Disciplina de Engenharia de Software')")
    private String title;

    @Column(nullable = true)
    @Comment("Descrição opcional do calendário")
    private String description;

    @Column(nullable = false)
    @Comment("Link de compartilhamento do calendário")
    private String shareLink;

    @ManyToOne(optional = false)
    @JoinColumn(name = "organizer_id", nullable = false)
    @Comment("Organizador que criou este calendário")
    private Organizer organizer;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    @Comment("Data e hora de criação do registro")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Comment("Data e hora da última atualização do registro")
    private LocalDateTime updatedAt;
}
