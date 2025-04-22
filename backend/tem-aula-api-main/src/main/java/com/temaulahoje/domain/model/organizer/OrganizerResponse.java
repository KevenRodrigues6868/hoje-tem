package com.temaulahoje.domain.model.organizer;

import java.time.LocalDateTime;
import java.util.UUID;

public record OrganizerResponse (
        UUID id,
        String name,
        String email,
        String googleId,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
){
}
