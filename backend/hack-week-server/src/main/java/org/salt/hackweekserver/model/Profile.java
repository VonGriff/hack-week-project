package org.salt.hackweekserver.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToMany(mappedBy = "profiles", cascade = CascadeType.ALL)
    private List<Group> groups;

    public long getId() {
        return id;
    }
}
