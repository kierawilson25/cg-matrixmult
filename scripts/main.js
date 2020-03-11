var compound_transform;

// automatically called whenever any transform changes
function CalculateCompoundTransform(transforms) {
    compound_transform = new Matrix(4, 4); // change / remove this
    var tranform_matrices = [];
    // matrices in `transforms[i].mat4x4`
    // note `transform[0]` is first tranform to apply to vertex
    
    // if only one transform, set compound transform eequal to it
    if(transforms.length == 1){
        compound_transforms = transforms[0].mat4x4;
    }
    // otherwise multiply all matrices together (in proper order)
    else{
        for(int i =0; i < transforms.length ; i ++)
        {
            transform_matricies.push(transform[i].mat4x4);
            
        }
        // `compound_transform = Matrix.multiply(...)`
        compound_transform = Matrix.multiply(transforms[i].mat4x4);
    }

    return compound_transform;
}

// automatically called whenever compound transform changes
function CalculateTransformedVertex(vertex) {
    // multiple vertex by compound_transform
    // `final_vertex = Matrix.multiply(...)`
    
    /////Does it really need to be removed
    var final_vertex = new Vector(4); // change / remove this
    //final_vertex = vertex;
    //Not sure if this stuff is right 
    final_vertex = Matrix.multiply(vertex);
    return final_vertex;
}

// automatically called whenever user modifies a transform (changes type or values)
function ChangeTransform(index, type, values) {
    app.transforms[index].type = type;
    // update `app.transforms[index].mat4x4`
    app.transforms[index].mat4x4;

    // recalculate compound transform and tranformed vertex
    app.compound = CalculateCompoundTransform(app.transforms);
    app.final_vertex = CalculateTransformedVertex(app.vertex);
}
