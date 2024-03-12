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
    private String title;
    private int groupSize;
    private int lowLimitGroupSize;
    private int upperLimitGroupSize;
    private double lowLimitComplexity;
    private double upperLimitComplexity;
    private String[] mechanisms;

    public Group() {}

    public Group(long id, String title, int groupSize, int lowLimitGroupSize, int upperLimitGroupSize, double lowLimitComplexity, double upperLimitComplexity, String[] mechanisms) {
        this.id = id;
        this.title = title;
        this.groupSize = groupSize;
        this.lowLimitGroupSize = lowLimitGroupSize;
        this.upperLimitGroupSize = upperLimitGroupSize;
        this.lowLimitComplexity = lowLimitComplexity;
        this.upperLimitComplexity = upperLimitComplexity;
        this.mechanisms = mechanisms;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getGroupSize() {
        return groupSize;
    }

    public int getLowLimitGroupSize() {
        return lowLimitGroupSize;
    }

    public int getUpperLimitGroupSize() {
        return upperLimitGroupSize;
    }

    public double getLowLimitComplexity() {
        return lowLimitComplexity;
    }

    public double getUpperLimitComplexity() {
        return upperLimitComplexity;
    }

    public String[] getMechanisms() {
        return mechanisms;
    }
}
