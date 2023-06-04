# Belly-Button-Challenge

We build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Process
Used D3 to call on the provided URL to create drop down menu which comprised of the following tasks.

    1. Created a variable holding the subject IDs.
    2. Created a variable where D3 should select the data from the specific id tag.
    3. Created a for loop for each subject ID and append the values and texts to 
    the appropriate id that was selected. 
    4. Used a function to complete all of the functions coded.
    
Used the 'samples' and 'metadata' data from the JSON file to create three charts which comprised of the following tasks: 

    1. Horizontal Chart: 
        a. Used `samples_values` as the values.
        b. Used `otu_ids` as labels. 
        c. Used `otu_labels` as hovertext for the chart. 
        
    2. Bubble Chart:
        a. Use `otu_ids` for the x values.
        b. Use `sample_values` for the y values.
        c. Use `sample_values` for the marker size.
        d. Use `otu_ids` for the marker colors.
        e. Use `otu_labels` for the text values.
        
    3. Gauge Chart:
        a. Plot weekly washing frequency of the subject.
