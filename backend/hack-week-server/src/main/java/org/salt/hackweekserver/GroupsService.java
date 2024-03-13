package org.salt.hackweekserver;

import org.salt.hackweekserver.model.Group;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupsService {

    GroupRepository repo;

    public GroupsService(GroupRepository repo) {
        this.repo = repo;
    }

    public Group getGroup() {
        String[] mechanisms = new String[]{"Deckbuilding, Worker Placement"};
        Group group = new Group("Looking For Boardgame Group Members!",2,3,5,2.4,3.5, mechanisms);
        return repo.save(group);
    }

    public List<Group> getAllGroups() {
        return repo.findAll();
    }
}
