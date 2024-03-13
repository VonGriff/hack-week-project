package org.salt.hackweekserver.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "groups")
public class Group {
    @Id
    @Column(name = "group_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "group_title")
    private String title;
    @Column(name = "group_size")
    private int groupSize;
    @Column(name = "group_size_lower_limit")
    private int lowLimitGroupSize;
    @Column(name = "group_size_upper_limit")
    private int upperLimitGroupSize;
    @Column(name = "complexity_lower_limit")
    private double lowLimitComplexity;
    @Column(name = "complexity_upper_limit")
    private double upperLimitComplexity;
    @Column(name = "mechanisms")
    private String mechanisms;

    public Group() {}

    public Group(String title, int groupSize, int lowLimitGroupSize, int upperLimitGroupSize, double lowLimitComplexity, double upperLimitComplexity, String mechanisms) {
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
        return mechanisms.split(", ");
    }
}
