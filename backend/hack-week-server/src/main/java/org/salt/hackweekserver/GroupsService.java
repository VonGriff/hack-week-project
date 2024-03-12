package org.salt.hackweekserver;

import org.salt.hackweekserver.model.Group;
import org.springframework.stereotype.Service;

@Service
public class GroupsService {

    public Group getGroup() {
        String[] mechanisms = new String[]{"Deckbuilding, Worker Placement"};
        return new Group(1,"Some title",2,3,5,2.4,3.5, mechanisms);
    }
}
