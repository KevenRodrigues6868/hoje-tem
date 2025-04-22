package com.temaulahoje.domain.model.organizer;

import com.temaulahoje.domain.entity.Organizer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface IOrganizerMapper {

    Organizer toEntity(OrganizerRequest request);

    OrganizerResponse toResponse(Organizer organizer);
}

