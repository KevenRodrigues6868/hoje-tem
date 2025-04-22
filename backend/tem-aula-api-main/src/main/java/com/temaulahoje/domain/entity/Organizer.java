package com.temaulahoje.domain.entity;

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
@Entity
@Table(name = "organizer")
public class Organizer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Comment("Identificador único do organizador")
    private UUID id;

    @Column(nullable = false)
    @Comment("Nome completo do organizador")
    private String name;

    @Column(nullable = false, unique = true)
    @Comment("E-mail do organizador, utilizado para login e notificações")
    private String email;

    @Column(nullable = false, unique = true)
    @Comment("ID do usuário vinculado ao Google para integração com a Google Agenda")
    private String googleId;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    @Comment("Data e hora de criação do registro")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Comment("Data e hora da última atualização do registro")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void prePersist(){
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void preUpdated(){
        this.updatedAt = LocalDateTime.now();
    }
}
