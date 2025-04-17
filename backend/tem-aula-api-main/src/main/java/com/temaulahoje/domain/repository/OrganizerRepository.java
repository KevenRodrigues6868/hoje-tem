package com.temaulahoje.domain.repository;

import com.temaulahoje.domain.entity.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface OrganizerRepository extends JpaRepository<Organizer, UUID> {
}
