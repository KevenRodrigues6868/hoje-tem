package com.temaulahoje.domain.service.organizer;

import com.temaulahoje.domain.model.organizer.OrganizerRequest;
import com.temaulahoje.domain.model.organizer.OrganizerResponse;

public interface IOrganizerService {

    OrganizerResponse create(OrganizerRequest request);
}
