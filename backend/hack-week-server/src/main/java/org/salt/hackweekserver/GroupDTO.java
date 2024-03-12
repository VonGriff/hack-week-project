package org.salt.hackweekserver;


import org.salt.hackweekserver.model.Group;

public record GroupDTO(long id, String title, int currentSize, GroupRange wantedSize, GroupRange complexityRange, String[] mechanisms) {

    public static GroupDTO groupToDto(Group group) {
        return new GroupDTO(group.getId(),
                group.getTitle(),
                group.getGroupSize(),
                new GroupRange(group.getLowLimitGroupSize(), group.getUpperLimitGroupSize()),
                new GroupRange(group.getLowLimitComplexity(), group.getUpperLimitComplexity()),
                group.getMechanisms());
    }
}

record GroupRange(double from, double to){}