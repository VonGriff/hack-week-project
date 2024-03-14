package org.salt.hackweekserver;

import org.salt.hackweekserver.model.Group;
import org.salt.hackweekserver.model.Profile;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class GroupsController {

    GroupsService service;

    public GroupsController(GroupsService service) {
        this.service = service;
    }

    @GetMapping("/groups")
    public ResponseEntity<List<GroupDTO>> getAll() {
        List<Group> group = service.getAllGroups();
        return ResponseEntity.ok(GroupDTO.listToGroupDto(group));
    }

    @PostMapping("/groups/filter")
    public ResponseEntity<List<GroupDTO>> getFiltered(@RequestBody GroupFilterDTO dto) {
        List<Group> group = service.getFilteredGroups(dto.mechanisms(), dto.groupSize(), dto.complexity());
        return ResponseEntity.ok(GroupDTO.listToGroupDto(group));
    }

    @PostMapping("/groups")
    public ResponseEntity<GroupDTO> addGroup(@RequestBody AddGroupDTO dto) {
        Group group = service.addGroup(dto.title(), dto.mechanisms(), dto.groupSize(), dto.complexity());
        URI location = URI.create("1234");
        return ResponseEntity.created(location).body(GroupDTO.groupToDto(group));
    }

    @GetMapping("/profile")
    public ResponseEntity<Profile> getUser() {
        Profile profile = service.getProfile();
        return ResponseEntity.ok(profile);
    }
}
