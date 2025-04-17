package com.temaulahoje.domain.repository;

import com.temaulahoje.domain.entity.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CalendarRepository extends JpaRepository<Calendar, UUID> {
}
