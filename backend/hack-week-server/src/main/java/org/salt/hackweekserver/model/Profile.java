package org.salt.hackweekserver.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "preferences")
    private String preferences;
    @ManyToMany(mappedBy = "profiles", cascade = CascadeType.ALL)
    private List<Group> groups;

    public Profile() {}

    public Profile(String firstName, String lastName, String preferences) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.preferences = preferences;
    }

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPreferences() {
        return preferences;
    }

    public List<Group> getGroups() {
        return groups;
    }
}
