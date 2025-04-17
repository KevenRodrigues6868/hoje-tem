package com.temaulahoje.api.controller;

import com.temaulahoje.domain.model.organizer.OrganizerRequest;
import com.temaulahoje.domain.model.organizer.OrganizerResponse;
import com.temaulahoje.domain.service.organizer.IOrganizerService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/organizer")
public class OrganizerController{

    private final IOrganizerService service;

    public OrganizerController(final IOrganizerService service) {
        this.service = service;
    }

    @PostMapping
    public OrganizerResponse create(@RequestBody OrganizerRequest request){
        return service.create(request);
    }
}
