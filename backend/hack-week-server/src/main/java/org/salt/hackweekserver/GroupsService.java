package org.salt.hackweekserver;

import org.salt.hackweekserver.model.Group;
import org.salt.hackweekserver.model.Profile;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class GroupsService {

    GroupRepository repo;
    ProfileRepository profileRepo;

    public GroupsService(GroupRepository repo, ProfileRepository profileRepo) {

        this.repo = repo;
        this.profileRepo = profileRepo;

        /*Profile profile = new Profile();
        Group group = new Group("A title", 2, 3, 5, 2.1, 3.4, "Worker Placement");
        group.addProfile(profile);
        profileRepo.save(profile);
        repo.save(group);*/

    }

    public Group addGroup(String title, String mechanisms, GroupRange groupSize, GroupRange complexity) {
        Group newGroup = new Group(title, 2, (int) groupSize.from(), (int) groupSize.to(), complexity.from(), complexity.to(), mechanisms);
        return repo.save(newGroup);
    }

    public List<Group> getAllGroups() {
        return repo.findAll();
    }

    public List<Group> getFilteredGroups(String mechanisms, GroupRange groupSize, GroupRange complexity) {
        List<Group> groupList = repo.findAll();

        return groupList.stream()
                .filter(group -> hasMechanisms(group.getMechanisms(), mechanisms) &&
                        isInRange(groupSize, group.getLowLimitGroupSize(), group.getUpperLimitGroupSize()) &&
                        isInRange(complexity, group.getLowLimitComplexity(), group.getUpperLimitComplexity()))
                .toList();
    }

    public Profile getProfile() {
        return profileRepo.findById(1L).orElse(null);
    }

    private boolean hasMechanisms(String toSearch, String mechanisms) {
        if (mechanisms.isEmpty()) {
            return true;
        }
        String[] search = toSearch.split(", ");
        String[] mechArray = mechanisms.split((", "));

        for (String s: mechArray) {
            if(Arrays.stream(search).noneMatch(t -> t.equals(s))) {
                return false;
            }
        }
        return true;
    }

    private boolean isInRange(GroupRange range, double from, double to) {
        return range.from() <= from && range.to() >= to;
    }
}
