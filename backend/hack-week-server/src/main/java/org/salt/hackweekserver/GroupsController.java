package org.salt.hackweekserver;

import org.salt.hackweekserver.model.Group;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/groups")
public class GroupsController {

    GroupsService service;

    public GroupsController(GroupsService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<GroupDTO>> getAll() {
        List<Group> group = service.getAllGroups();
        return ResponseEntity.ok(GroupDTO.listToGroupDto(group));
    }

    @PostMapping
    public ResponseEntity<Void> addGroup() {
        return ResponseEntity.noContent().build();
    }
}
