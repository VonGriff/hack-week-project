package org.salt.hackweekserver;

import org.salt.hackweekserver.model.Group;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class GroupsService {

    GroupRepository repo;

    public GroupsService(GroupRepository repo) {
        this.repo = repo;
    }

    public Group getGroup() {
        Group group = new Group("Looking For Boardgame Group Members!",2,3,5,2.4,3.5, "Deckbuilding, Worker Placement");
        return repo.save(group);
    }

    public List<Group> getAllGroups() {
        return repo.findAll();
    }

    public List<Group> getFilteredGroups(String mechanisms, GroupRange groupSize, GroupRange complexity) {
        List<Group> groupList = repo.findAll();

        String[] mechanismsArray = mechanisms.split(", ");
        return groupList.stream()
                .filter(group -> hasMechanisms(group.getMechanisms(), mechanismsArray))
                .filter(group -> isInRange(groupSize, group.getLowLimitGroupSize(), group.getUpperLimitGroupSize()))
                .filter(group -> isInRange(complexity, group.getLowLimitComplexity(), group.getUpperLimitComplexity()))
                .toList();
        //return null;
    }

    private boolean hasMechanisms(String[] toSearch, String[] mechanisms) {
        String search = Arrays.stream(toSearch).reduce(String::concat).toString();
        for (String s: mechanisms) {
            if (!search.matches(".*" + s + ".*")) {
                return false;
            }
        }
        return true;
    }

    private boolean isInRange(GroupRange range, double from, double to) {
        return range.from() >= from && range.to() <= to;
    }
}
