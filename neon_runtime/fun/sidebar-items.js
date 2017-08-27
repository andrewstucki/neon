initSidebarItems({"fn":[["call","Calls the function provided (`fun`) and mutates the `out` argument provided to refer to the result of the function call. Returns `false` if the result of the call was empty."],["construct","Makes a constructor call to with the function provided (`fun`) and mutates the `out` argument provided to refer to the result of the constructor call. Returns `false` if the result of the call was empty."],["exec_kernel","Creates a new `v8::HandleScope` and calls the `callback` provided with the the argument signature `(info, kernel, scope)`."],["get_kernel","Gets the reference to the `v8::Local<v8::External>` handle provided."],["new","Mutates the `out` argument provided to refer to a newly created `v8::Function`. Returns `false` if the value couldn't be created."],["new_template","Mutates the `out` argument provided to refer to a newly created `v8::FunctionTemplate`. Returns `false` if the value couldn't be created."]]});