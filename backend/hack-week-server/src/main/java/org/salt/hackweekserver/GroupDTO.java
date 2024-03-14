package org.salt.hackweekserver;


import org.salt.hackweekserver.model.Group;

import java.util.List;

public record GroupDTO(long id, String title, int currentSize, GroupRange wantedSize, GroupRange complexityRange, String[] mechanisms) {

    public static GroupDTO groupToDto(Group group) {
        return new GroupDTO(group.getId(),
                group.getTitle(),
                group.getGroupSize(),
                new GroupRange(group.getLowLimitGroupSize(), group.getUpperLimitGroupSize()),
                new GroupRange(group.getLowLimitComplexity(), group.getUpperLimitComplexity()),
                group.getMechanisms().split(", "));
    }

    public static List<GroupDTO> listToGroupDto(List<Group> groupList) {
        return groupList.stream()
                .map(GroupDTO::groupToDto)
                .toList();
    }
}

record GroupRange(double from, double to){}