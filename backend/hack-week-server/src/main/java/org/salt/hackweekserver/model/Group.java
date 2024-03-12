package org.salt.hackweekserver.model;

/*import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;*/

import java.util.UUID;

//@Entity
public class Group {
    //@Id
    //@GeneratedValue(strategy = GenerationType.UUID)
    private long id;
    private int groupSize;
    private int wantedGroupSize;
    private double complexity;
    private String[] mechanisms;

    public Group() {}

    public Group(long id, int groupSize, int wantedGroupSize, double complexity, String[] mechanisms) {
        this.id = id;
        this.groupSize = groupSize;
        this.wantedGroupSize = wantedGroupSize;
        this.complexity = complexity;
        this.mechanisms = mechanisms;
    }

    public long getId() {
        return id;
    }

    public int getGroupSize() {
        return groupSize;
    }

    public int getWantedGroupSize() {
        return wantedGroupSize;
    }

    public double getComplexity() {
        return complexity;
    }

    public String[] getMechanisms() {
        return mechanisms;
    }
}
