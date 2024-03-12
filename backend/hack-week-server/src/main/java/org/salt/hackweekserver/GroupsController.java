package org.salt.hackweekserver;

import org.salt.hackweekserver.model.Group;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/groups")
public class GroupsController {

    GroupsService service;

    public GroupsController(GroupsService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<GroupDTO> getAll() {
        var group = service.getGroup();
        return ResponseEntity.ok(GroupDTO.groupToDto(group));
    }

    @PostMapping
    public ResponseEntity<Void> addGroup() {
        return ResponseEntity.noContent().build();
    }
}
