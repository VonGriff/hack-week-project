package org.salt.hackweekserver;

public record AddGroupDTO(String title, String mechanisms, GroupRange groupSize, GroupRange complexity) {
}
