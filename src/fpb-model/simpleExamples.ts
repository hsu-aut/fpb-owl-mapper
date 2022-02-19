import { FpbJsModel } from "./fpb.interface";

export const example: FpbJsModel = [
    {
        "$type": "fpb:Project",
        "name": "FPBJS_Project",
        "targetNamespace": "http://www.hsu-ifa.de/fpbjs",
        "entryPoint": "cec58f37-5871-46d8-938d-29fdc856302c"
    },
    {
        "process": {
            "$type": "fpb:Process",
            "id": "cec58f37-5871-46d8-938d-29fdc856302c",
            "elementsContainer": [
                "fca5c759-b677-4cbf-8600-6d28591737d7"
            ],
            "isDecomposedProcessOperator": null,
            "consistsOfStates": [
                "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                "bc313958-c9cb-4a37-a77d-43bec79a3eed"
            ],
            "consistsOfSystemLimit": "fca5c759-b677-4cbf-8600-6d28591737d7",
            "consistsOfProcesses": [
                "0cf3c635-07d3-470e-8dfe-d778cadfb5cf"
            ],
            "consistsOfProcessOperator": [
                "0cf3c635-07d3-470e-8dfe-d778cadfb5cf"
            ]
        },
        "elementDataInformation": [
            {
                "$type": "fpb:SystemLimit",
                "id": "fca5c759-b677-4cbf-8600-6d28591737d7",
                "elementsContainer": [
                    "47c84b35-fba4-4a92-9242-0a52f034c918",
                    "c06082b0-ed69-490b-94cc-4221afe98e6e",
                    "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                    "0cf3c635-07d3-470e-8dfe-d778cadfb5cf",
                    "bc313958-c9cb-4a37-a77d-43bec79a3eed"
                ]
            },
            {
                "$type": "fpb:Flow",
                "id": "47c84b35-fba4-4a92-9242-0a52f034c918",
                "sourceRef": "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                "targetRef": "0cf3c635-07d3-470e-8dfe-d778cadfb5cf"
            },
            {
                "$type": "fpb:Flow",
                "id": "c06082b0-ed69-490b-94cc-4221afe98e6e",
                "sourceRef": "0cf3c635-07d3-470e-8dfe-d778cadfb5cf",
                "targetRef": "bc313958-c9cb-4a37-a77d-43bec79a3eed"
            },
            {
                "$type": "fpb:Product",
                "id": "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                "identification": {
                    "$type": "fpb:Identification",
                    "uniqueIdent": "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                    "longName": "",
                    "shortName": "",
                    "versionNumber": "",
                    "revisionNumber": ""
                },
                "isAssignedTo": [
                    "0cf3c635-07d3-470e-8dfe-d778cadfb5cf"
                ],
                "incoming": [],
                "outgoing": [
                    "47c84b35-fba4-4a92-9242-0a52f034c918"
                ]
            },
            {
                "$type": "fpb:ProcessOperator",
                "id": "0cf3c635-07d3-470e-8dfe-d778cadfb5cf",
                "identification": {
                    "$type": "fpb:Identification",
                    "uniqueIdent": "0cf3c635-07d3-470e-8dfe-d778cadfb5cf",
                    "longName": "",
                    "shortName": "1",
                    "versionNumber": "",
                    "revisionNumber": ""
                },
                "isAssignedTo": [],
                "incoming": [
                    "47c84b35-fba4-4a92-9242-0a52f034c918"
                ],
                "outgoing": [
                    "c06082b0-ed69-490b-94cc-4221afe98e6e"
                ],
                "decomposedView": "0cf3c635-07d3-470e-8dfe-d778cadfb5cf",
                "name": "1",
                "characteristics": [
                    {
                        "$type": "fpbch:Characteristics",
                        "category": {
                            "$type": "fpb:Identification",
                            "uniqueIdent": "0cf3c635-07d3-470e-8dfe-d778cadfb5cf_c1",
                            "longName": "someCharacteristic",
                            "shortName": "C_1",
                            "versionNumber": "1",
                            "revisionNumber": "1"
                        },
                        "descriptiveElement": {
                            "$type": "fpbch:DescriptiveElement",
                            "valueDeterminationProcess": "asd",
                            "representivity": "qwe",
                            "setpointValue": {
                                "$type": "fpbch:ValueWithUnit",
                                "value": "12",
                                "unit": ""
                            },
                            "validityLimits": [
                                {
                                    "$type": "fpbch:ValidityLimits",
                                    "limitType": "",
                                    "from": 0,
                                    "to": 0
                                }
                            ],
                            "actualValues": {
                                "$type": "fpbch:ValueWithUnit",
                                "value": "23",
                                "unit": ""
                            }
                        },
                        "relationalElement": {
                            "$type": "fpbch:RelationalElement",
                            "view": "qwe",
                            "model": "asd",
                            "regulationsForRelationalGeneration": "qwe"
                        }
                    }
                ]
            },
            {
                "$type": "fpb:Product",
                "id": "bc313958-c9cb-4a37-a77d-43bec79a3eed",
                "identification": {
                    "$type": "fpb:Identification",
                    "uniqueIdent": "bc313958-c9cb-4a37-a77d-43bec79a3eed",
                    "longName": "",
                    "shortName": "",
                    "versionNumber": "",
                    "revisionNumber": ""
                },
                "isAssignedTo": [
                    "0cf3c635-07d3-470e-8dfe-d778cadfb5cf"
                ],
                "incoming": [
                    "c06082b0-ed69-490b-94cc-4221afe98e6e"
                ],
                "outgoing": []
            }
        ],
        "elementVisualInformation": [
            {
                "id": "fca5c759-b677-4cbf-8600-6d28591737d7",
                "width": 650,
                "height": 700,
                "type": "fpb:SystemLimit",
                "x": 253,
                "y": 81
            },
            {
                "id": "47c84b35-fba4-4a92-9242-0a52f034c918",
                "type": "fpb:Flow",
                "waypoints": [
                    {
                        "original": {
                            "x": 543,
                            "y": 105
                        },
                        "x": 543,
                        "y": 105
                    },
                    {
                        "x": 543,
                        "y": 204
                    },
                    {
                        "x": 527,
                        "y": 204
                    },
                    {
                        "original": {
                            "x": 527,
                            "y": 302
                        },
                        "x": 527,
                        "y": 302
                    }
                ]
            },
            {
                "id": "c06082b0-ed69-490b-94cc-4221afe98e6e",
                "type": "fpb:Flow",
                "waypoints": [
                    {
                        "original": {
                            "x": 527,
                            "y": 382
                        },
                        "x": 527,
                        "y": 382
                    },
                    {
                        "x": 527,
                        "y": 571
                    },
                    {
                        "x": 533,
                        "y": 571
                    },
                    {
                        "original": {
                            "x": 533,
                            "y": 759
                        },
                        "x": 533,
                        "y": 759
                    }
                ]
            },
            {
                "id": "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                "width": 50,
                "height": 50,
                "type": "fpb:Product",
                "x": 518,
                "y": 55
            },
            {
                "id": "0cf3c635-07d3-470e-8dfe-d778cadfb5cf",
                "width": 150,
                "height": 80,
                "type": "fpb:ProcessOperator",
                "x": 452,
                "y": 302
            },
            {
                "id": "bc313958-c9cb-4a37-a77d-43bec79a3eed",
                "width": 50,
                "height": 50,
                "type": "fpb:Product",
                "x": 508,
                "y": 759
            }
        ]
    },
    {
        "process": {
            "$type": "fpb:Process",
            "id": "0cf3c635-07d3-470e-8dfe-d778cadfb5cf",
            "elementsContainer": [
                "745077fe-386a-4a2f-bd00-e124f2608294"
            ],
            "isDecomposedProcessOperator": "0cf3c635-07d3-470e-8dfe-d778cadfb5cf",
            "consistsOfStates": [
                "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                "bc313958-c9cb-4a37-a77d-43bec79a3eed",
                "255edf7a-1132-4c5f-9504-d3f88460f5d1"
            ],
            "consistsOfSystemLimit": "745077fe-386a-4a2f-bd00-e124f2608294",
            "consistsOfProcesses": [],
            "consistsOfProcessOperator": [
                "3243e8c3-c855-43a6-b345-7a0847f57b09",
                "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9"
            ],
            "parent": "cec58f37-5871-46d8-938d-29fdc856302c"
        },
        "elementDataInformation": [
            {
                "$type": "fpb:SystemLimit",
                "id": "745077fe-386a-4a2f-bd00-e124f2608294",
                "elementsContainer": [
                    "a612ef50-e787-4943-b9f4-800ce4e66be0",
                    "6d9acc05-94e3-487d-95a1-805fd20cb13e",
                    "d3879d75-ef8e-49b8-8bbb-e0e05970a87b",
                    "6ffbf3b0-af47-434e-afae-4a25547abef5",
                    "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                    "bc313958-c9cb-4a37-a77d-43bec79a3eed",
                    "3243e8c3-c855-43a6-b345-7a0847f57b09",
                    "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9",
                    "255edf7a-1132-4c5f-9504-d3f88460f5d1"
                ],
                "name": "1"
            },
            {
                "$type": "fpb:Flow",
                "id": "a612ef50-e787-4943-b9f4-800ce4e66be0",
                "sourceRef": "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                "targetRef": "3243e8c3-c855-43a6-b345-7a0847f57b09"
            },
            {
                "$type": "fpb:Flow",
                "id": "6d9acc05-94e3-487d-95a1-805fd20cb13e",
                "sourceRef": "3243e8c3-c855-43a6-b345-7a0847f57b09",
                "targetRef": "255edf7a-1132-4c5f-9504-d3f88460f5d1"
            },
            {
                "$type": "fpb:Flow",
                "id": "d3879d75-ef8e-49b8-8bbb-e0e05970a87b",
                "sourceRef": "255edf7a-1132-4c5f-9504-d3f88460f5d1",
                "targetRef": "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9"
            },
            {
                "$type": "fpb:Flow",
                "id": "6ffbf3b0-af47-434e-afae-4a25547abef5",
                "sourceRef": "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9",
                "targetRef": "bc313958-c9cb-4a37-a77d-43bec79a3eed"
            },
            {
                "$type": "fpb:Product",
                "id": "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                "identification": {
                    "$type": "fpb:Identification",
                    "uniqueIdent": "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                    "longName": "",
                    "shortName": "",
                    "versionNumber": "",
                    "revisionNumber": ""
                },
                "isAssignedTo": [
                    "3243e8c3-c855-43a6-b345-7a0847f57b09"
                ],
                "incoming": [],
                "outgoing": [
                    "a612ef50-e787-4943-b9f4-800ce4e66be0"
                ]
            },
            {
                "$type": "fpb:Product",
                "id": "bc313958-c9cb-4a37-a77d-43bec79a3eed",
                "identification": {
                    "$type": "fpb:Identification",
                    "uniqueIdent": "bc313958-c9cb-4a37-a77d-43bec79a3eed",
                    "longName": "",
                    "shortName": "",
                    "versionNumber": "",
                    "revisionNumber": ""
                },
                "isAssignedTo": [
                    "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9"
                ],
                "incoming": [
                    "6ffbf3b0-af47-434e-afae-4a25547abef5"
                ],
                "outgoing": []
            },
            {
                "$type": "fpb:ProcessOperator",
                "id": "3243e8c3-c855-43a6-b345-7a0847f57b09",
                "identification": {
                    "$type": "fpb:Identification",
                    "uniqueIdent": "3243e8c3-c855-43a6-b345-7a0847f57b09",
                    "longName": "",
                    "shortName": "2",
                    "versionNumber": "",
                    "revisionNumber": ""
                },
                "isAssignedTo": [],
                "incoming": [
                    "a612ef50-e787-4943-b9f4-800ce4e66be0"
                ],
                "outgoing": [
                    "6d9acc05-94e3-487d-95a1-805fd20cb13e"
                ],
                "name": "2"
            },
            {
                "$type": "fpb:ProcessOperator",
                "id": "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9",
                "identification": {
                    "$type": "fpb:Identification",
                    "uniqueIdent": "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9",
                    "longName": "asd123",
                    "shortName": "3",
                    "versionNumber": "2",
                    "revisionNumber": "3"
                },
                "isAssignedTo": [],
                "incoming": [
                    "d3879d75-ef8e-49b8-8bbb-e0e05970a87b"
                ],
                "outgoing": [
                    "6ffbf3b0-af47-434e-afae-4a25547abef5"
                ],
                "name": "3",
                "characteristics": [
                    {
                        "$type": "fpbch:Characteristics",
                        "category": {
                            "$type": "fpb:Identification",
                            "uniqueIdent": "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9_c1",
                            "longName": "asdqwe",
                            "shortName": "C_1",
                            "versionNumber": "2",
                            "revisionNumber": "2"
                        },
                        "descriptiveElement": {
                            "$type": "fpbch:DescriptiveElement",
                            "valueDeterminationProcess": "asdasqwe",
                            "representivity": "qweqwe",
                            "setpointValue": {
                                "$type": "fpbch:ValueWithUnit",
                                "value": "2",
                                "unit": ""
                            },
                            "validityLimits": [
                                {
                                    "$type": "fpbch:ValidityLimits",
                                    "limitType": "",
                                    "from": 0,
                                    "to": 0
                                }
                            ],
                            "actualValues": {
                                "$type": "fpbch:ValueWithUnit",
                                "value": "2",
                                "unit": ""
                            }
                        },
                        "relationalElement": {
                            "$type": "fpbch:RelationalElement",
                            "view": "2asd",
                            "model": "qwe",
                            "regulationsForRelationalGeneration": "sasc"
                        }
                    }
                ]
            },
            {
                "$type": "fpb:Information",
                "id": "255edf7a-1132-4c5f-9504-d3f88460f5d1",
                "identification": {
                    "$type": "fpb:Identification",
                    "uniqueIdent": "255edf7a-1132-4c5f-9504-d3f88460f5d1",
                    "longName": "",
                    "shortName": "",
                    "versionNumber": "",
                    "revisionNumber": ""
                },
                "isAssignedTo": [
                    "3243e8c3-c855-43a6-b345-7a0847f57b09",
                    "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9"
                ],
                "incoming": [
                    "6d9acc05-94e3-487d-95a1-805fd20cb13e"
                ],
                "outgoing": [
                    "d3879d75-ef8e-49b8-8bbb-e0e05970a87b"
                ]
            }
        ],
        "elementVisualInformation": [
            {
                "id": "745077fe-386a-4a2f-bd00-e124f2608294",
                "width": 650,
                "height": 700,
                "type": "fpb:SystemLimit",
                "x": 350,
                "y": 50
            },
            {
                "id": "a612ef50-e787-4943-b9f4-800ce4e66be0",
                "type": "fpb:Flow",
                "waypoints": [
                    {
                        "original": {
                            "x": 675,
                            "y": 75
                        },
                        "x": 675,
                        "y": 75
                    },
                    {
                        "x": 675,
                        "y": 112
                    },
                    {
                        "x": 661,
                        "y": 112
                    },
                    {
                        "original": {
                            "x": 661,
                            "y": 149
                        },
                        "x": 661,
                        "y": 149
                    }
                ]
            },
            {
                "id": "6d9acc05-94e3-487d-95a1-805fd20cb13e",
                "type": "fpb:Flow",
                "waypoints": [
                    {
                        "original": {
                            "x": 661,
                            "y": 229
                        },
                        "x": 661,
                        "y": 229
                    },
                    {
                        "x": 661,
                        "y": 262
                    },
                    {
                        "x": 628,
                        "y": 262
                    },
                    {
                        "original": {
                            "x": 628,
                            "y": 294
                        },
                        "x": 628,
                        "y": 294
                    }
                ]
            },
            {
                "id": "d3879d75-ef8e-49b8-8bbb-e0e05970a87b",
                "type": "fpb:Flow",
                "waypoints": [
                    {
                        "original": {
                            "x": 628,
                            "y": 344
                        },
                        "x": 628,
                        "y": 344
                    },
                    {
                        "x": 628,
                        "y": 391
                    },
                    {
                        "x": 647,
                        "y": 391
                    },
                    {
                        "original": {
                            "x": 647,
                            "y": 437
                        },
                        "x": 647,
                        "y": 437
                    }
                ]
            },
            {
                "id": "6ffbf3b0-af47-434e-afae-4a25547abef5",
                "type": "fpb:Flow",
                "waypoints": [
                    {
                        "original": {
                            "x": 647,
                            "y": 517
                        },
                        "x": 647,
                        "y": 517
                    },
                    {
                        "x": 647,
                        "y": 621
                    },
                    {
                        "x": 675,
                        "y": 621
                    },
                    {
                        "original": {
                            "x": 675,
                            "y": 725
                        },
                        "x": 675,
                        "y": 725
                    }
                ]
            },
            {
                "id": "dddd7425-2cb9-4504-bc2d-5efb706ec7a4",
                "width": 50,
                "height": 50,
                "type": "fpb:Product",
                "x": 650,
                "y": 25
            },
            {
                "id": "bc313958-c9cb-4a37-a77d-43bec79a3eed",
                "width": 50,
                "height": 50,
                "type": "fpb:Product",
                "x": 650,
                "y": 725
            },
            {
                "id": "3243e8c3-c855-43a6-b345-7a0847f57b09",
                "width": 150,
                "height": 80,
                "type": "fpb:ProcessOperator",
                "x": 586,
                "y": 149
            },
            {
                "id": "9da9a1f1-2a83-44ba-8176-07dfb01fc3f9",
                "width": 150,
                "height": 80,
                "type": "fpb:ProcessOperator",
                "x": 572,
                "y": 437
            },
            {
                "id": "255edf7a-1132-4c5f-9504-d3f88460f5d1",
                "width": 50,
                "height": 50,
                "type": "fpb:Information",
                "x": 603,
                "y": 294
            }
        ]
    }
];