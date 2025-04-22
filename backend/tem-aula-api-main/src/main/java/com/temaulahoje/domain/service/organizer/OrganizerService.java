package com.temaulahoje.domain.service.organizer;

import com.temaulahoje.domain.entity.Organizer;
import com.temaulahoje.domain.model.organizer.IOrganizerMapper;
import com.temaulahoje.domain.model.organizer.OrganizerRequest;
import com.temaulahoje.domain.model.organizer.OrganizerResponse;
import com.temaulahoje.domain.repository.OrganizerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class OrganizerService implements IOrganizerService{

    private final OrganizerRepository repository;
    private final IOrganizerMapper mapper;

    @Transactional
    public OrganizerResponse create(OrganizerRequest request){

        Organizer organizer = mapper.toEntity(request);
        Organizer organizerSaved = repository.save(organizer);
        return mapper.toResponse(organizerSaved);
    }
}
